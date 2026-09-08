import http from "http";

const PORT = process.env.PORT || 3001;

const rawKey = process.env.OPENROUTER_API_KEY || "";
const API_KEY = rawKey.trim().replace(/^Bearer\s+/i, "");

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method !== "POST" || req.url !== "/api/chat") {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        error: "Not found",
      })
    );

    return;
  }

  if (!API_KEY) {
    res.writeHead(500, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        error: "OPENROUTER_API_KEY is missing.",
      })
    );

    return;
  }

  try {
    let body = "";

    for await (const chunk of req) {
      body += chunk;
    }

    const data = JSON.parse(body || "{}");

    /*
      Expect the same request structure used by OpenRouter:

      {
        "model": "openrouter/free",
        "messages": [
          {
            "role": "user",
            "content": "Hello!"
          }
        ]
      }
    */

    if (!Array.isArray(data.messages) || data.messages.length === 0) {
      res.writeHead(400, {
        "Content-Type": "application/json",
      });

      res.end(
        JSON.stringify({
          error: "No messages were provided.",
        })
      );

      return;
    }

    const openRouterResponse = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
          "X-Title": "AI MIMO",
        },

        body: JSON.stringify({
          model: "openrouter/free",

          messages: [
            {
              role: "system",
              content:
                "You are the AI tutor inside AI MIMO. Be helpful, accurate, concise, and explain things clearly. Help the student learn rather than simply giving answers.",
            },

            ...data.messages,
          ],
        }),
      }
    );

    const result = await openRouterResponse.json();

    if (!openRouterResponse.ok) {
      console.error("OpenRouter error:", result);

      res.writeHead(openRouterResponse.status, {
        "Content-Type": "application/json",
      });

      res.end(
        JSON.stringify({
          error:
            result?.error?.message ||
            "OpenRouter request failed.",
        })
      );

      return;
    }

    const answer =
      result?.choices?.[0]?.message?.content;

    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        answer:
          answer ||
          "I didn't receive an answer from the AI.",
      })
    );
  } catch (error) {
    console.error("Server error:", error);

    res.writeHead(500, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        error:
          error?.message ||
          "The AI tutor could not process the request.",
      })
    );
  }
});

server.listen(PORT, () => {
  console.log(
    `AI MIMO backend running on port ${PORT}`
  );
});