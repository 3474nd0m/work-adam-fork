function ChatPanel() {
  const [chats, setChats] = useState([
    {
      id: 1,
      title: "Python error",
      messages: [
        {
          role: "user",
          content: "Why is my Python code returning an error?"
        },
        {
          role: "assistant",
          content:
            "Good question! Let me take a look.\n\nThe error is because you're trying to divide by 0, which is not allowed in Python.\n\nTry checking if the denominator is not zero before dividing."
        }
      ]
    },
    {
      id: 2,
      title: "Python loops",
      messages: []
    },
    {
      id: 3,
      title: "Math help",
      messages: []
    }
  ]);

  const [selectedChat, setSelectedChat] = useState(1);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectorOpen, setSelectorOpen] = useState(false);

  const currentChat =
    chats.find((chat) => chat.id === selectedChat) || chats[0];

  const messages = currentChat?.messages || [];

  const createChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New chat",
      messages: []
    };

    setChats((old) => [newChat, ...old]);
    setSelectedChat(newChat.id);
    setSelectorOpen(false);
  };

  const selectChat = (id) => {
    setSelectedChat(id);
    setSelectorOpen(false);
  };

  const updateMessages = (chatId, newMessages) => {
    setChats((old) =>
      old.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: newMessages
            }
          : chat
      )
    );
  };

  const sendMessage = async () => {
    const question = input.trim();

    if (!question || loading) return;

    const currentMessages = currentChat?.messages || [];

    const userMessage = {
      role: "user",
      content: question
    };

    const updatedMessages = [
      ...currentMessages,
      userMessage
    ];

    updateMessages(selectedChat, updatedMessages);

    // Give a new chat a useful name based on its first message
    if (
      currentChat.title === "New chat" ||
      currentMessages.length === 0
    ) {
      const title =
        question.length > 28
          ? question.slice(0, 28) + "..."
          : question;

      setChats((old) =>
        old.map((chat) =>
          chat.id === selectedChat
            ? {
                ...chat,
                title
              }
            : chat
        )
      );
    }

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: question
        })
      });

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(
          data.error ||
            `API request failed (${response.status})`
        );
      }

      const answer =
        data.answer ||
        data.reply ||
        data.message ||
        data.response;

      if (!answer) {
        throw new Error(
          "The AI returned an empty response."
        );
      }

      updateMessages(selectedChat, [
        ...updatedMessages,
        {
          role: "assistant",
          content: answer
        }
      ]);
    } catch (error) {
      console.error("AI chat error:", error);

      updateMessages(selectedChat, [
        ...updatedMessages,
        {
          role: "assistant",
          content:
            error.message ||
            "I couldn't connect to the AI."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="chat-panel panel">

      {/* HEADER */}
      <header className="panel-header">
        <div>
          <h2>AI Tutor</h2>

          <div className="online">
            <i />
            {loading ? "Thinking..." : "Online"}
          </div>
        </div>

        <div className="chat-header-actions">

          {/* CHAT SELECTOR */}
          <div className="chat-selector-wrap">
            <button
              className={`chat-selector-button ${
                selectorOpen ? "open" : ""
              }`}
              onClick={() =>
                setSelectorOpen((old) => !old)
              }
              type="button"
            >
              <Icon name="chat" size={17} />

              <span>
                {currentChat?.title || "New chat"}
              </span>

              <span className="chat-selector-arrow">
                {selectorOpen ? "▲" : "▼"}
              </span>
            </button>

            {selectorOpen && (
              <div className="chat-selector-menu">

                <div className="chat-selector-top">
                  <strong>Chats</strong>

                  <button
                    type="button"
                    className="new-chat-button"
                    onClick={createChat}
                  >
                    + New Chat
                  </button>
                </div>

                <div className="chat-selector-list">
                  {chats.map((chat) => (
                    <button
                      key={chat.id}
                      type="button"
                      className={`chat-selector-item ${
                        selectedChat === chat.id
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        selectChat(chat.id)
                      }
                    >
                      <span className="chat-item-icon">
                        <Icon name="chat" size={17} />
                      </span>

                      <span className="chat-item-text">
                        <strong>{chat.title}</strong>
                        <small>
                          {chat.messages.length === 0
                            ? "No messages yet"
                            : `${chat.messages.length} message${
                                chat.messages.length === 1
                                  ? ""
                                  : "s"
                              }`}
                        </small>
                      </span>

                      {selectedChat === chat.id && (
                        <span className="chat-selected-check">
                          ✓
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button className="personality-button">
            <Icon name="person" size={19} />
            Change Personality
          </button>

        </div>
      </header>

      <Wave />

      {/* CHAT */}
      <div className="chat-content">

        {messages.length === 0 && (
          <div className="empty-chat">
            <div className="empty-chat-wave">
              <Wave small />
            </div>

            <h3>Start a new conversation</h3>

            <p>
              Ask me about Python, Math, coding,
              or anything you're learning.
            </p>
          </div>
        )}

        {messages.map((message, index) => {

          if (message.role === "user") {
            return (
              <div
                className="user-message"
                key={index}
              >
                {message.content}

                <small>
                  Just now ✓
                </small>
              </div>
            );
          }

          return (
            <div
              className="assistant-message"
              key={index}
            >
              <div className="assistant-avatar">
                <Wave small />
              </div>

              <div className="message-box">
                <p
                  style={{
                    whiteSpace: "pre-wrap"
                  }}
                >
                  {message.content}
                </p>

                <div className="message-actions">
                  🔊 Listen
                  <span>♡</span>
                  <span>♡</span>
                  <span>▢</span>
                </div>
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="assistant-message">
            <div className="assistant-avatar">
              <Wave small />
            </div>

            <div className="message-box">
              <p className="thinking-message">
                Thinking<span>.</span>
                <span>.</span>
                <span>.</span>
              </p>
            </div>
          </div>
        )}

      </div>

      {/* INPUT */}
      <div className="chat-input">
        <input
          value={input}
          disabled={loading}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              !e.shiftKey
            ) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder={
            loading
              ? "AI is thinking..."
              : "Ask anything..."
          }
        />

        <button
          className="mic-button"
          type="button"
        >
          <Icon name="mic" size={20} />
        </button>

        <button
          className="send-button"
          type="button"
          disabled={loading}
          onClick={sendMessage}
        >
          <Icon name="send" size={23} />
        </button>
      </div>

    </section>
  );
}