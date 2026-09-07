import React, { useState } from "react";
import "./App.css";

const Icon = ({ name, size = 22 }) => {
  const icons = {
    chat: (
      <>
        <path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.5 8.5 0 0 1-4-.9L3 20l1.8-4A7.4 7.4 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" />
        <circle cx="9" cy="12" r=".8" />
        <circle cx="12" cy="12" r=".8" />
        <circle cx="15" cy="12" r=".8" />
      </>
    ),
    code: (
      <>
        <path d="m8 7-5 5 5 5" />
        <path d="m16 7 5 5-5 5" />
        <path d="m14 3-4 18" />
      </>
    ),
    quiz: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.8 9a2.4 2.4 0 1 1 4 1.8c-1.2.8-1.8 1.3-1.8 2.7" />
        <circle cx="12" cy="16.8" r=".7" />
      </>
    ),
    history: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
        <path d="M3 8v-4h4" />
      </>
    ),
    bookmark: (
      <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-3.5L6 21Z" />
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1-1.7 1.7-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1.1 1.7V20h-2.4v-.1a1.8 1.8 0 0 0-1.1-1.7 1.8 1.8 0 0 0-2 .4l-.1.1-1.7-1.7.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.7-1.1H4v-2.4h.1a1.8 1.8 0 0 0 1.7-1.1 1.8 1.8 0 0 0-.4-2l-.1-.1L7 6.5l.1.1a1.8 1.8 0 0 0 2 .4 1.8 1.8 0 0 0 1.1-1.7V5h2.4v.3a1.8 1.8 0 0 0 1.1 1.7 1.8 1.8 0 0 0 2-.4l.1-.1 1.7 1.7-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.7 1.1h.3v2.4h-.3a1.8 1.8 0 0 0-1.3 1.2Z" />
      </>
    ),
    person: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c.7-3.5 3-5.5 7-5.5s6.3 2 7 5.5" />
      </>
    ),
    send: (
      <>
        <path d="m4 4 17 8-17 8 3-8Z" />
        <path d="M7 12h14" />
      </>
    ),
    mic: (
      <>
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M5 10a7 7 0 0 0 14 0M12 17v4M8 21h8" />
      </>
    ),
    play: <path d="m8 5 11 7-11 7Z" />,
    refresh: (
      <>
        <path d="M20 11a8 8 0 0 0-14.8-3.8L3 10" />
        <path d="M3 5v5h5" />
        <path d="M4 13a8 8 0 0 0 14.8 3.8L21 14" />
        <path d="M21 19v-5h-5" />
      </>
    ),
    expand: (
      <>
        <path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5" />
      </>
    ),
    more: (
      <>
        <circle cx="5" cy="12" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    lightbulb: (
      <>
        <path d="M9 18h6M10 21h4" />
        <path d="M8.5 14.5A7 7 0 1 1 15.5 14c-.8.7-1.2 1.5-1.4 2.5h-4.2c-.2-1-.6-1.8-1.4-2.5Z" />
      </>
    )
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
};

/* Fixed waveform:
   Heights are calculated as numbers first,
   then converted to px. This prevents the
   giant waveform from covering the screen.
*/
const Wave = ({ small = false }) => (
  <div className={`wave ${small ? "wave-small" : ""}`}>
    {Array.from({ length: small ? 28 : 55 }).map((_, i) => {
      const height = small
        ? Math.round(Math.abs(Math.sin(i * 0.62)) * 14 + 3)
        : Math.round(Math.abs(Math.sin(i * 0.62)) * 42 + 3);

      return (
        <span
          key={i}
          style={{ height: `${height}px` }}
        />
      );
    })}
  </div>
);

function LeftRail({ active, setActive }) {
  const items = [
    ["chat", "Chat"],
    ["code", "Python"],
    ["quiz", "Quizzes"],
    ["history", "History"],
    ["bookmark", "Bookmarks"],
    ["settings", "Settings"]
  ];

  return (
    <aside className="rail">
      <div className="rail-logo">
        <Wave small />
      </div>

      <nav>
        {items.map(([icon, label]) => (
          <button
            key={label}
            className={`rail-item ${
              active === label ? "active" : ""
            }`}
            onClick={() => setActive(label)}
          >
            <Icon name={icon} size={25} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="rail-user">
        <div className="avatar">A</div>
        <strong>Alex</strong>
        <small>Level 12</small>
      </div>

      <div className="rail-online">
        <i />
        Online
      </div>
    </aside>
  );
}

function HomePanel() {
  return (
    <section className="home-panel panel">
      <div className="version">
        AI TUTOR <b>v2.4</b>
      </div>

      <h1>
        Your <span>AI Tutor.</span>
      </h1>

      <p className="tagline">
        Sound. Smart. Always here.
      </p>

      <div className="hero-wave">
        <div className="wave-ring" />
        <Wave />
      </div>

      <div className="feature-list">
        <div className="feature">
          <div className="feature-icon python-icon">🐍</div>
          <div>
            <strong>Python Helper</strong>
            <span>Debug, learn &amp; build</span>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon brain-icon">♧</div>
          <div>
            <strong>Smart Assistant</strong>
            <span>Answers that adapt</span>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon star-icon">✦</div>
          <div>
            <strong>Adaptive Learning</strong>
            <span>Gets smarter with you</span>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon question-icon">?</div>
          <div>
            <strong>Quizzes &amp; Practice</strong>
            <span>Test and improve</span>
          </div>
        </div>
      </div>

      <button className="primary-button">
        Start Learning
        <span>→</span>
      </button>

      <div className="system-status">
        <i />
        System Status: <span>Online</span>
      </div>
    </section>
  );
}

function ChatPanel() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((old) => [...old, input.trim()]);
    setInput("");
  };

  return (
    <section className="chat-panel panel">
      <header className="panel-header">
        <div>
          <h2>AI Tutor</h2>

          <div className="online">
            <i />
            Online
          </div>
        </div>

        <button className="personality-button">
          <Icon name="person" size={19} />
          Change Personality
        </button>
      </header>

      <Wave />

      <div className="chat-content">
        <div className="user-message">
          Why is my Python code returning an error?

          <small>
            10:42 AM ✓✓
          </small>
        </div>

        <div className="assistant-message">
          <div className="assistant-avatar">
            <Wave small />
          </div>

          <div className="message-box">
            <p>
              Good question! Let me take a look.
            </p>

            <p>
              The error is because you're trying to
              divide by <b>0</b>, which is not allowed
              in Python.
            </p>

            <p>
              Here's what's happening:
            </p>

            <div className="inline-code">
              result = 10 / 0
              <span>
                # Division by zero raises ZeroDivisionError
              </span>
            </div>

            <p>
              Try checking if the denominator is not
              zero before dividing.
            </p>

            <p>Example:</p>

            <pre>{`a = 10
b = 0
if b != 0:
    result = a / b
    print(result)
else:
    print("Cannot divide by zero!")`}</pre>

            <div className="message-actions">
              🔊 Listen
              <span>♡</span>
              <span>♡</span>
              <span>▢</span>
            </div>
          </div>
        </div>

        {messages.map((message, index) => (
          <div className="extra-message" key={index}>
            {message}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Ask anything..."
        />

        <button className="mic-button">
          <Icon name="mic" size={20} />
        </button>

        <button
          className="send-button"
          onClick={sendMessage}
        >
          <Icon name="send" size={23} />
        </button>
      </div>
    </section>
  );
}

function PythonPanel() {
  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput("120");
  };

  return (
    <section className="python-panel panel">
      <header className="panel-header python-header">
        <h2>
          <span className="python-logo">🐍</span>
          Python Mode
        </h2>

        <div className="header-actions">
          <button>
            <Icon name="expand" size={18} />
          </button>

          <button>
            <Icon name="more" size={20} />
          </button>
        </div>
      </header>

      <div className="editor">
        <div className="editor-top">
          <span>
            <i />
            main.py
          </span>

          <b>Python 3</b>
        </div>

        <div className="code">
          <div>
            <em>1</em>
            <span className="pink">def factorial</span>(n):
          </div>

          <div>
            <em>2</em>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="pink">if</span> n == 0:
          </div>

          <div>
            <em>3</em>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="green">return</span> 1
          </div>

          <div>
            <em>4</em>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="pink">else</span>:
          </div>

          <div>
            <em>5</em>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="green">return</span>{" "}
            n * factorial(n-1)
          </div>

          <div>
            <em>6</em>
          </div>

          <div>
            <em>7</em>
            n = <span className="orange">5</span>
          </div>

          <div>
            <em>8</em>
            <span className="yellow">print</span>
            (factorial(n))
          </div>
        </div>
      </div>

      <div className="python-buttons">
        <button
          className="run-button"
          onClick={runCode}
        >
          <Icon name="play" size={17} />
          Run Code
        </button>

        <button
          className="reset-button"
          onClick={() => setOutput("")}
        >
          <Icon name="refresh" size={18} />
          Reset
        </button>
      </div>

      <div className="output-card">
        <label>Output</label>

        <div className="output-value">
          {output || "—"}

          {output && (
            <span className="success-check">
              <Icon name="check" size={22} />
            </span>
          )}
        </div>
      </div>

      <div className="insight-card">
        <div className="insight-icon">
          <Icon name="lightbulb" size={27} />
        </div>

        <div>
          <h3>AI Insight</h3>

          <p>
            Recursion works by breaking a problem
            into smaller versions of itself until
            reaching a base case.
          </p>

          <p>
            This makes complex problems easier
            to solve.
          </p>

          <span className="concept">
            Concept: Recursion
          </span>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState("Chat");

  return (
    <main className="app">
      <LeftRail
        active={active}
        setActive={setActive}
      />

      <div className="dashboard">
        <HomePanel />
        <ChatPanel />
        <PythonPanel />
      </div>
    </main>
  );
}