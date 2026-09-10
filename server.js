import http from "http";

const PORT = process.env.PORT || 3001;

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");

  // Handle browser CORS preflight
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Only accept our API test endpoint
  if (req.method !== "POST" || req.url !== "/api/chat") {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        error: "Not found"
      })
    );

    return;
  }

  console.log("=================================");
  console.log("TEST: POST /api/chat REACHED SERVER");
  console.log("=================================");

  // Read the request body
  let body = "";

  for await (const chunk of req) {
    body += chunk;
  }

  console.log("Received request body:", body);

  // IMPORTANT:
  // We are NOT calling OpenRouter yet.
  // This response proves the Render server is running this file.

  const response = {
    test: "SERVER_IS_RUNNING",
    message: "POST /api/chat reached server.js successfully.",
    receivedBody: body
  };

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(response));

  console.log("TEST RESPONSE SENT");
});

server.listen(PORT, () => {
  console.log(`AI MIMO TEST BACKEND running on port ${PORT}`);
});