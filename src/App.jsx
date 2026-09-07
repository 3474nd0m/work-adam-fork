import React, { useState } from "react";
import "./App.css";

const Icon = ({ name, size = 20 }) => {
  const paths = {
    chat: (
      <>
        <path d="M20 11a8 8 0 0 1-8 8H6l-4 3v-6a8 8 0 1 1 18-5Z" />
        <path d="M7 9h.01M12 9h.01M17 9h.01" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    math: (
      <>
        <path d="M4 7h16" />
        <path d="M7 4v6" />
        <path d="M4 17h16" />
        <path d="M7 14v6" />
      </>
    ),
    quiz: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-.9.8-1.7 1.2-1.7 2.7" />
        <path d="M12 17h.01" />
      </>
    ),
    history: (
      <>
        <path d="M3 12a9 9 0 1 0 3-6.7" />
        <path d="M3 4v5h5" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    bookmark: (
      <>
        <path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-6-4-6 4Z" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.1h-2.6v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1A1.7 1.7 0 0 0 8 15a1.7 1.7 0 0 0-1.5-1H6.4v-2.6h.1A1.7 1.7 0 0 0 8 10a1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V5h2.6v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.1v2.6h-.1a1.7 1.7 0 0 0-1.5 1.4Z" />
      </>
    ),
    send: (
      <>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </>
    ),
    play: (
      <path d="m8 5 11 7-11 7Z" />
    ),
    rotate: (
      <>
        <path d="M3 12a9 9 0 1 0 3-6.7" />
        <path d="M3 4v5h5" />
      </>
    ),
    chevron: <path d="m6 9 6 6 6-6" />,
    brain: (
      <>
        <path d="M9.5 4.5A3 3 0 0 0 5 7a3 3 0 0 0 0 5.5A3 3 0 0 0 7 17a3 3 0 0 0 5 1.5V5a3 3 0 0 0-2.5-.5Z" />
        <path d="M14.5 4.5A3 3 0 0 1 19 7a3 3 0 0 1 0 5.5 3 3 0 0 1-2 4.5 3 3 0 0 1-5 1.5V5a3 3 0 0 1 2.5-.5Z" />
      </>
    ),
    spark: (
      <>
        <path d="m12 2 1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5Z" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
};

const Wave = ({ small = false }) => (
  <div className={`wave ${small ? "wave-small" : ""}`}>
    {[18, 30, 48, 25, 55, 38, 68, 32, 58, 45, 72, 35, 52, 28, 62, 42, 26, 50, 35, 22].map(
      (h, i) => (
        <span key={i} style={{ height: `${h}%` }} />
      )
    )}
  </div>
);

const personalities = [
  {
    name: "Mentor",
    description: "Guides you with questions",
    traits: ["Patient", "Curious", "Encouraging"],
  },
  {
    name: "Teacher",
    description: "Explains concepts clearly",
    traits: ["Clear", "Structured", "Thorough"],
  },
  {
    name: "Challenger",
    description: "Pushes you to think deeper",
    traits: ["Direct", "Demanding", "Bold"],
  },
  {
    name: "Analyst",
    description: "Breaks problems into details",
    traits: ["Logical", "Precise", "Systematic"],
  },
  {
    name: "Coach",
    description: "Keeps you motivated",
    traits: ["Energetic", "Positive", "Focused"],
  },
  {
    name: "Zen",
    description: "Calm and thoughtful",
    traits: ["Calm", "Mindful", "Balanced"],
  },
];

function HomePanel() {
  return (
    <section className="home-panel glass">
      <div className="home-top">
        <div className="logo-mark">
          <Wave small />
        </div>

        <div>
          <div className="eyebrow">AI LEARNING PLATFORM</div>
          <h1>Your AI Tutor.</h1>
          <p>Sound. Smart. Always here.</p>
        </div>
      </div>

      <div className="hero-wave">
        <Wave />
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-icon purple">
            <Icon name="code" />
          </div>
          <div>
            <strong>Python Helper</strong>
            <span>Debug, learn & build</span>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon blue">
            <Icon name="math" />
          </div>
          <div>
            <strong>Math Solver</strong>
            <span>Step-by-step solutions</span>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon pink">
            <Icon name="brain" />
          </div>
          <div>
            <strong>Smart Assistant</strong>
            <span>Answers that adapt</span>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon cyan">
            <Icon name="spark" />
          </div>
          <div>
            <strong>Adaptive Learning</strong>
            <span>Gets smarter with you</span>
          </div>
        </div>
      </div>

      <button className="start-learning">
        Start Learning
        <span>→</span>
      </button>

      <div className="home-bottom">
        <span>AI TUTOR v2.4</span>
        <span className="status-dot" />
        <span>READY</span>
      </div>
    </section>
  );
}

function LeftRail({ active, setActive }) {
  const items = [
    ["chat", "Chat"],
    ["code", "Python"],
    ["math", "Math"],
    ["quiz", "Quizzes"],
    ["history", "History"],
    ["bookmark", "Bookmarks"],
    ["settings", "Settings"],
  ];

  return (
    <aside className="rail">
      <div className="rail-logo">
        <Wave small />
      </div>

      <div className="rail-items">
        {items.map(([icon, label]) => (
          <button
            key={label}
            className={`rail-item ${active === label ? "active" : ""}`}
            onClick={() => setActive(label)}
          >
            <Icon name={icon} size={19} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      <div className="rail-user">
        <div className="avatar">A</div>
      </div>
    </aside>
  );
}

function ChatPanel() {
  const [messages, setMessages] = useState([
    {
      role: "user",
      text: "Why is my Python code returning an error?",
    },
    {
      role: "ai",
      text: "I found the issue. You're dividing a number by zero, which causes a ZeroDivisionError in Python.",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    const value = input.trim();

    if (!value) return;

    setMessages((current) => [
      ...current,
      { role: "user", text: value },
      {
        role: "ai",
        text: "I'm looking at that now. Let's break the problem down step by step.",
      },
    ]);

    setInput("");
  };

  return (
    <section className="chat-panel glass">
      <div className="panel-header">
        <div>
          <div className="panel-title">AI Tutor</div>
          <div className="online">
            <span />
            Online
          </div>
        </div>

        <button className="personality-button">
          <Icon name="brain" size={16} />
          Change Personality
          <Icon name="chevron" size={15} />
        </button>
      </div>

      <div className="chat-wave">
        <Wave />
      </div>

      <div className="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.role === "user" ? "user-message" : "ai-message"}`}
          >
            <div className="message-label">
              {message.role === "user" ? "YOU" : "AI TUTOR"}
            </div>

            <div className="message-text">{message.text}</div>

            {message.role === "ai" && (
              <div className="code-box">
                <div className="code-line">
                  <span>1</span>
                  <code>number = 10</code>
                </div>
                <div className="code-line">
                  <span>2</span>
                  <code>result = number / 0</code>
                </div>
                <div className="code-line error-line">
                  <span>3</span>
                  <code>print(result)</code>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          placeholder="Ask anything..."
        />

        <button onClick={sendMessage}>
          <Icon name="send" size={18} />
        </button>
      </div>
    </section>
  );
}

function PythonPanel() {
  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);

  const runCode = () => {
    setRunning(true);

    setTimeout(() => {
      setOutput("120");
      setRunning(false);
    }, 500);
  };

  const reset = () => {
    setOutput("");
  };

  return (
    <section className="python-panel glass">
      <div className="section-heading">
        <div>
          <div className="mode-label purple-text">PYTHON MODE</div>
          <h2>Code Playground</h2>
        </div>

        <button className="reset-button" onClick={reset}>
          <Icon name="rotate" size={15} />
          Reset
        </button>
      </div>

      <div className="editor">
        <div className="editor-top">
          <span className="language-dot" />
          <span>main.py</span>
          <span className="editor-status">Python 3</span>
        </div>

        <div className="code-editor">
          <div>
            <span className="line-number">1</span>
            <span className="purple-code">def</span>{" "}
            <span className="white-code">factorial</span>
            <span className="white-code">(n):</span>
          </div>

          <div>
            <span className="line-number">2</span>
            <span className="indent"> </span>
            <span className="purple-code">if</span>{" "}
            <span className="white-code">n == 0:</span>
          </div>

          <div>
            <span className="line-number">3</span>
            <span className="indent"> </span>
            <span className="indent"> </span>
            <span className="purple-code">return</span>{" "}
            <span className="blue-code">1</span>
          </div>

          <div>
            <span className="line-number">4</span>
            <span className="indent"> </span>
            <span className="purple-code">return</span>{" "}
            <span className="white-code">
              n * factorial(n - 1)
            </span>
          </div>

          <div>
            <span className="line-number">5</span>
          </div>

          <div>
            <span className="line-number">6</span>
            <span className="white-code">print(</span>
            <span className="yellow-code">factorial</span>
            <span className="white-code">(5))</span>
          </div>
        </div>
      </div>

      <button className="run-button" onClick={runCode}>
        <Icon name="play" size={17} />
        {running ? "Running..." : "Run Code"}
      </button>

      <div className="output-box">
        <div className="output-heading">
          <span>OUTPUT</span>
          {output && <span className="success">SUCCESS</span>}
        </div>

        <div className="output-value">{output || "Run your code to see output"}</div>
      </div>

      <div className="ai-insight">
        <div className="insight-icon">
          <Icon name="spark" size={17} />
        </div>

        <div>
          <strong>AI Insight</strong>
          <p>
            Recursion works by breaking a problem into smaller versions of
            itself until reaching a base case.
          </p>
        </div>
      </div>
    </section>
  );
}

function MathPanel() {
  const [showSteps, setShowSteps] = useState(false);

  return (
    <section className="math-panel glass">
      <div className="section-heading">
        <div>
          <div className="mode-label blue-text">MATH MODE</div>
          <h2>Equation Solver</h2>
        </div>

        <button
          className={`steps-button ${showSteps ? "selected" : ""}`}
          onClick={() => setShowSteps(!showSteps)}
        >
          {showSteps ? "Hide Steps" : "Show Steps"}
        </button>
      </div>

      <div className="equation">
        2x<sup>2</sup> + 5x − 3 = 0
      </div>

      <div className="formula-card">
        <div className="formula-title">QUADRATIC FORMULA</div>
        <div className="formula">
          x = <span className="fraction">
            <span>−b ± √(b² − 4ac)</span>
            <span>a2</span>
          </span>
        </div>
      </div>

      {showSteps && (
        <div className="math-steps">
          <div className="step">
            <span>01</span>
            <div>
              <strong>Identify coefficients</strong>
              <p>a = 2, b = 5, c = −3</p>
            </div>
          </div>

          <div className="step">
            <span>02</span>
            <div>
              <strong>Calculate discriminant</strong>
              <p>b² − 4ac = 49</p>
            </div>
          </div>
        </div>
      )}

      <div className="roots">
        <div className="roots-title">ROOTS</div>

        <div className="root-grid">
          <div className="root-card">
            <span>x₁</span>
            <strong>1</strong>
          </div>

          <div className="root-card">
            <span>x₂</span>
            <strong>−1.5</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonalityStrip() {
  const [selected, setSelected] = useState("Mentor");

  const selectedPersonality =
    personalities.find((person) => person.name === selected) ||
    personalities[0];

  return (
    <section className="personality-section glass">
      <div className="personality-header">
        <div>
          <div className="mode-label pink-text">AI PERSONALITY</div>
          <h2>How should your tutor teach you?</h2>
        </div>

        <div className="current-personality">
          <span>Current:</span>
          <strong>{selectedPersonality.name}</strong>
        </div>
      </div>

      <div className="personality-grid">
        {personalities.map((person) => (
          <button
            key={person.name}
            className={`personality-card ${
              selected === person.name ? "active" : ""
            }`}
            onClick={() => setSelected(person.name)}
          >
            <div className="personality-check">
              {selected === person.name && <Icon name="check" size={13} />}
            </div>

            <strong>{person.name}</strong>
            <span>{person.description}</span>

            <div className="traits">
              {person.traits.map((trait) => (
                <small key={trait}>{trait}</small>
              ))}
            </div>
          </button>
        ))}
      </div>

      <div className="trait-section">
        <div className="trait-title">PERSONALITY TRAITS</div>

        <div className="trait-bars">
          <div className="trait-bar">
            <div>
              <span>Patience</span>
              <strong>82%</strong>
            </div>
            <div className="bar">
              <span style={{ width: "82%" }} />
            </div>
          </div>

          <div className="trait-bar">
            <div>
              <span>Detail</span>
              <strong>74%</strong>
            </div>
            <div className="bar">
              <span style={{ width: "74%" }} />
            </div>
          </div>

          <div className="trait-bar">
            <div>
              <span>Challenge</span>
              <strong>58%</strong>
            </div>
            <div className="bar">
              <span style={{ width: "58%" }} />
            </div>
          </div>

          <div className="trait-bar">
            <div>
              <span>Encouragement</span>
              <strong>91%</strong>
            </div>
            <div className="bar">
              <span style={{ width: "91%" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState("Chat");

  return (
    <div className="app">
      <LeftRail active={active} setActive={setActive} />

      <main className="dashboard">
        <div className="top-grid">
          <HomePanel />
          <ChatPanel />
          <PythonPanel />
          <MathPanel />
        </div>

        <PersonalityStrip />
      </main>
    </div>
  );
}