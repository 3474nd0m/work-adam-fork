import React, { useState } from "react";
import "./App.css";

const Icon = ({ children, size = 18 }) => (
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
    {children}
  </svg>
);

const icons = {
  activity: (
    <Icon>
      <path d="M2 12h4l3-8 5 16 3-8h5" />
    </Icon>
  ),

  chat: (
    <Icon>
      <path d="M20 15a4 4 0 0 1-4 4H8l-4 3v-7a4 4 0 0 1-1-3V7a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4z" />
    </Icon>
  ),

  python: (
    <Icon>
      <path d="M12 2c-3 0-4 1.5-4 3.5V8h4v1H6c-2 0-3 1.5-3 4s1 4 3 4h2v-3c0-2 1.5-3 4-3h4c2 0 4-1.5 4-4V6c0-2.5-2-4-4-4z" />
      <path d="M12 22c3 0 4-1.5 4-3.5V16h-4v-1h6c2 0 3-1.5 3-4s-1-4-3-4h-2v3c0 2-1.5 3-4 3H8c-2 0-4 1.5-4 4v1c0 2.5 2 4 4 4z" />
    </Icon>
  ),

  math: (
    <Icon>
      <path d="M4 6h16M4 12h16M4 18h16" />
      <path d="M8 3l-3 6 3 6M16 9l3 6-3 6" />
    </Icon>
  ),

  quiz: (
    <Icon>
      <path d="M4 4h16v16H4z" />
      <path d="M8 9l2 2 5-5M8 16h8" />
    </Icon>
  ),

  history: (
    <Icon>
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
      <path d="M12 7v5l3 2" />
    </Icon>
  ),

  bookmark: (
    <Icon>
      <path d="M6 3h12v18l-6-4-6 4z" />
    </Icon>
  ),

  settings: (
    <Icon>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-2.5V20a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1A1.7 1.7 0 0 0 8 15a1.7 1.7 0 0 0-1.6-1H6v-2.5h.2A1.7 1.7 0 0 0 8 10a1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2h2.5V5a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2V14h-.2a1.7 1.7 0 0 0-1.6 1z" />
    </Icon>
  ),

  user: (
    <Icon>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c.5-4 3-6 8-6s7.5 2 8 6" />
    </Icon>
  ),

  home: (
    <Icon>
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </Icon>
  ),

  flask: (
    <Icon>
      <path d="M9 3h6" />
      <path d="M10 3v6l-6 10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2L14 9V3" />
      <path d="M8 16h8" />
    </Icon>
  ),

  chart: (
    <Icon>
      <path d="M4 19V5M4 19h16" />
      <path d="M8 16v-5M12 16V7M16 16v-9M20 16v-5" />
    </Icon>
  ),

  mic: (
    <Icon>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />
    </Icon>
  ),

  send: (
    <Icon>
      <path d="M3 11l18-8-8 18-2-8z" />
      <path d="M3 11l8 2" />
    </Icon>
  ),

  play: (
    <Icon>
      <path d="M7 4l13 8-13 8z" fill="currentColor" stroke="none" />
    </Icon>
  ),

  refresh: (
    <Icon>
      <path d="M20 11a8 8 0 0 0-14.5-4L3 10" />
      <path d="M3 5v5h5" />
      <path d="M4 13a8 8 0 0 0 14.5 4L21 14" />
      <path d="M21 19v-5h-5" />
    </Icon>
  ),

  check: (
    <Icon>
      <path d="M5 12l4 4L19 6" />
    </Icon>
  ),

  copy: (
    <Icon>
      <rect x="8" y="8" width="11" height="11" rx="2" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </Icon>
  ),

  thumbsUp: (
    <Icon>
      <path d="M7 10v10H4V10zM7 19h10a2 2 0 0 0 2-2l1-6a2 2 0 0 0-2-2h-5l1-4c.3-1.2-.6-2-1.5-2L8 9v10z" />
    </Icon>
  ),

  thumbsDown: (
    <Icon>
      <path d="M7 14V4H4v10zM7 5h10a2 2 0 0 1 2 2l1 6a2 2 0 0 1-2 2h-5l1 4c.3 1.2-.6 2-1.5 2L8 15V5z" />
    </Icon>
  ),

  volume: (
    <Icon>
      <path d="M4 10v4h4l5 4V6l-5 4z" />
      <path d="M17 9a5 5 0 0 1 0 6M19 6a9 9 0 0 1 0 12" />
    </Icon>
  ),

  users: (
    <Icon>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20c.5-4 2.5-6 6-6s5.5 2 6 6M15 15c3 0 5 1.5 6 5" />
    </Icon>
  ),

  sparkle: (
    <Icon>
      <path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5z" />
      <path d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7z" />
    </Icon>
  )
};

const personalities = [
  {
    name: "Mentor",
    tags: ["Supportive", "Encouraging"],
    description: "Friendly and patient. Great for beginners.",
    quote: "I’ll help you every step of the way.",
    values: [90, 80, 40, 60, 30],
    color: "blue"
  },
  {
    name: "Teacher",
    tags: ["Clear", "Structured"],
    description: "Explains concepts clearly with real examples.",
    quote: "Understanding comes from clarity.",
    values: [82, 95, 45, 45, 55],
    color: "green"
  },
  {
    name: "Challenger",
    tags: ["Bold", "Motivating"],
    description: "Pushes you to think deeper and do better.",
    quote: "You can do more than you think.",
    values: [65, 72, 90, 70, 40],
    color: "orange"
  },
  {
    name: "Analyst",
    tags: ["Logical", "Precise"],
    description: "Straight to the point. Facts and logic first.",
    quote: "Let’s solve this logically.",
    values: [55, 90, 60, 35, 85],
    color: "purple"
  },
  {
    name: "Coach",
    tags: ["Motivational", "Positive"],
    description: "Keeps you motivated and confident.",
    quote: "Believe in yourself. You’ve got this!",
    values: [95, 60, 65, 80, 45],
    color: "cyan"
  },
  {
    name: "Zen",
    tags: ["Calm", "Mindful"],
    description: "Calm and mindful. Reduces stress.",
    quote: "Breathe. Focus. You’re doing great.",
    values: [78, 50, 30, 35, 20],
    color: "pink"
  }
];

const waveHeights = [
  4, 7, 11, 19, 8, 13, 23, 11, 17, 31, 21,
  11, 27, 41, 19, 9, 25, 54, 34, 14, 24,
  45, 28, 14, 8, 16, 29, 17, 11, 23, 35,
  20, 11, 6, 15, 27, 17, 10, 7, 12, 17, 9, 5
];

function Wave({ color = "blue", mixed = false, small = false }) {
  return (
    <div className={`wave ${color} ${mixed ? "mixed" : ""} ${small ? "small" : ""}`}>
      {waveHeights.map((height, index) => (
        <i
          key={index}
          style={{
            height: `${height + ((index * 7) % 5)}px`
          }}
        />
      ))}
    </div>
  );
}

function HomePanel() {
  return (
    <section className="home-panel panel">
      <div className="home-title">Your AI Tutor.</div>
      <div className="home-subtitle">Sound. Smart. Always here.</div>

      <div className="hero-wave">
        <Wave />
      </div>

      <div className="listen-pill">
        Always listening. Always thinking.
      </div>

      <div className="feature-card">
        <div className="feature-icon blue">
          {icons.python}
        </div>
        <div>
          <b>Python Helper</b>
          <span>Write, debug and improve code</span>
        </div>
      </div>

      <div className="feature-card">
        <div className="feature-icon purple">
          {icons.math}
        </div>
        <div>
          <b>Math Solver</b>
          <span>Solve problems step by step</span>
        </div>
      </div>

      <div className="feature-card">
        <div className="feature-icon cyan">
          {icons.activity}
        </div>
        <div>
          <b>Smart Assistant</b>
          <span>Explain anything, in simple terms</span>
        </div>
      </div>

      <div className="feature-card">
        <div className="feature-icon violet">
          {icons.sparkle}
        </div>
        <div>
          <b>Adaptive Learning</b>
          <span>Learns with you, gets smarter</span>
        </div>
      </div>

      <button className="start-btn">
        Start Learning
        <span>{icons.send}</span>
      </button>

      <div className="bottom-nav">
        <button className="active">
          {icons.home}
          <span>Home</span>
        </button>

        <button>
          {icons.bookmark}
          <span>Learn</span>
        </button>

        <button>
          {icons.flask}
          <span>Labs</span>
        </button>

        <button>
          {icons.chart}
          <span>Progress</span>
        </button>

        <button>
          {icons.user}
          <span>Profile</span>
        </button>
      </div>
    </section>
  );
}

function LeftRail({ active, setActive }) {
  const items = [
    ["Chat", "chat"],
    ["Python", "python"],
    ["Math", "math"],
    ["Quizzes", "quiz"],
    ["History", "history"],
    ["Bookmarks", "bookmark"],
    ["Settings", "settings"]
  ];

  return (
    <aside className="left-rail panel">
      <div className="brand-mark">
        {icons.activity}
      </div>

      <div className="rail-items">
        {items.map(([name, icon]) => (
          <button
            key={name}
            className={`rail-item ${active === name ? "active" : ""}`}
            onClick={() => setActive(name)}
          >
            {icons[icon]}
            <span>{name}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}

function ChatPanel() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    const text = input.trim();

    if (!text) return;

    setMessages((old) => [
      ...old,
      { type: "user", text },
      {
        type: "ai",
        text: "Good question! Let me take a look. I’ll explain it step by step and keep the reasoning clear."
      }
    ]);

    setInput("");
  };

  return (
    <section className="chat-panel panel">
      <div className="chat-head">
        <div className="chat-avatar">
          {icons.activity}
        </div>

        <div>
          <h2>AI Tutor</h2>

          <span className="online">
            <em />
            Online
          </span>
        </div>

        <button className="personality-btn">
          {icons.users}
          Change Personality
        </button>
      </div>

      <Wave mixed />

      <div className="chat-content">
        <div className="user-bubble">
          Why is my Python code returning an error?
          <small>10:42 AM</small>
        </div>

        <div className="ai-message">
          <div className="mini-avatar">
            {icons.activity}
          </div>

          <div className="message-body">
            <p>Good question! Let me take a look.</p>

            <p>
              The error is because you’re trying to divide by <b>0</b>,
              which is not allowed in Python.
            </p>

            <p>Here’s what’s happening:</p>

            <pre>
              result = 10 / 0{" "}
              <span className="comment">
                # Division by zero raises ZeroDivisionError
              </span>
            </pre>

            <p>
              Try checking if the denominator is not zero before dividing.
            </p>

            <p>Example:</p>

            <pre>{`a = 10
b = 2
if b != 0:
    result = a / b
    print(result)
else:
    print("Cannot divide by zero!")`}</pre>

            <div className="message-actions">
              <button>
                {icons.volume}
                Listen
              </button>

              <button>{icons.thumbsUp}</button>
              <button>{icons.thumbsDown}</button>
              <button>{icons.copy}</button>
            </div>
          </div>
        </div>

        {messages.map((message, index) => {
          if (message.type === "user") {
            return (
              <div className="user-bubble extra" key={index}>
                {message.text}
              </div>
            );
          }

          return (
            <div className="ai-message extra" key={index}>
              <div className="mini-avatar">
                {icons.activity}
              </div>

              <div className="message-body">
                {message.text}
              </div>
            </div>
          );
        })}
      </div>

      <div className="chat-input-wrap">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          placeholder="Ask anything..."
        />

        <button className="mic">
          {icons.mic}
        </button>

        <button className="send" onClick={sendMessage}>
          {icons.send}
        </button>
      </div>
    </section>
  );
}

function PythonPanel() {
  const [output, setOutput] = useState("120");

  return (
    <section className="mode-panel python-panel panel">
      <div className="mode-title">
        <div>
          {icons.python}
          <b>Python Mode</b>
        </div>

        {icons.settings}
      </div>

      <div className="code-box">
        <pre>{`def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

n = 5
print(factorial(n))`}</pre>
      </div>

      <button
        className="run-btn"
        onClick={() => setOutput("120")}
      >
        {icons.play}
        Run Code
      </button>

      <button
        className="reset-btn"
        onClick={() => setOutput("")}
      >
        {icons.refresh}
      </button>

      <div className="output-card">
        <h4>Output</h4>

        <div className="output-line">
          <span>{output}</span>
          {output && icons.check}
        </div>
      </div>

      <div className="insight">
        <div className="mini-avatar">
          {icons.activity}
        </div>

        <div>
          <h3>AI Insight</h3>

          <p>Great! Your code works perfectly.</p>

          <p>
            Tip: Recursion is a powerful way to solve problems by breaking
            them down into smaller cases.
          </p>
        </div>
      </div>
    </section>
  );
}

function MathPanel() {
  const [showSteps, setShowSteps] = useState(true);

  return (
    <section className="mode-panel math-panel panel">
      <div className="mode-title">
        <div>
          {icons.math}
          <b>Math Mode</b>
        </div>
      </div>

      <div className="math-user">
        Solve for x:
        <br />
        <b>2x² + 5x - 3 = 0</b>
        <small>10:58 AM</small>
      </div>

      <div className="math-answer">
        <div className="mini-avatar">
          {icons.activity}
        </div>

        <p>Let’s solve this step by step.</p>

        <p>We’ll use the quadratic formula:</p>

        <div className="formula">
          x =
          <span>−b ± √b² − 4ac</span>
          <hr />
          <span>2a</span>
        </div>

        {showSteps && (
          <>
            <p>
              Where: a = 2, b = 5, c = −3
            </p>

            <p>
              <b>Step 1: Calculate the discriminant</b>
              <br />
              Δ = b² − 4ac = 5² − 4(2)(−3) = 25 + 24 = <b>49</b>
            </p>

            <p>
              <b>Step 2: Find the roots</b>
            </p>

            <div className="roots">
              x₁ = (−5 + √49) / 2(2) = 1
              <br />
              <br />
              x₂ = (−5 − √49) / 2(2) = −1.5
            </div>

            <div className="success">
              So, the solutions are: x = 1 and x = −1.5
            </div>
          </>
        )}

        <button
          className="steps-btn"
          onClick={() => setShowSteps(!showSteps)}
        >
          Show Steps
          <span className={showSteps ? "arrow rotate" : "arrow"}>
            ▼
          </span>
        </button>
      </div>

      <div className="math-actions">
        {icons.copy}
        {icons.thumbsUp}
        {icons.thumbsDown}
      </div>
    </section>
  );
}

function PersonalityStrip({ selected, setSelected }) {
  const current = personalities[selected];

  const labels = [
    "Encouragement",
    "Detailed Explanations",
    "Challenge Level",
    "Humor",
    "Brevity"
  ];

  return (
    <section className="personality-area panel">
      <div className="personality-intro">
        <h2>AI Personalities</h2>

        <p>
          Choose the personality
          <br />
          that fits your vibe.
        </p>

        <button>
          {icons.users}
          Compare Personalities
        </button>

        <button>
          {icons.sparkle}
          Create Custom
        </button>
      </div>

      <div className="personality-list">
        {personalities.map((personality, index) => (
          <button
            key={personality.name}
            className={`personality-card ${personality.color} ${
              selected === index ? "selected" : ""
            }`}
            onClick={() => setSelected(index)}
          >
            {selected === index && (
              <span className="selected-check">
                {icons.check}
              </span>
            )}

            <Wave
              color={personality.color}
              small
            />

            <h3>{personality.name}</h3>

            <div className="tags">
              {personality.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <p>{personality.description}</p>

            <q>{personality.quote}</q>
          </button>
        ))}

        <div className="traits">
          <div className="traits-head">
            <div>
              <Wave small />
              <b>{current.name}</b>
            </div>

            <button>
              {icons.users}
              Preview
            </button>
          </div>

          <h4>Personality Traits</h4>

          {labels.map((label, index) => (
            <div className="trait" key={label}>
              <label>{label}</label>

              <div className="bar">
                <i
                  style={{
                    width: `${current.values[index]}%`
                  }}
                />
              </div>

              <span>{current.values[index]}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="personality-note">
        {icons.sparkle}
        You can switch or customize personalities anytime.
      </div>
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState("Chat");
  const [selected, setSelected] = useState(0);

  return (
    <main className="app">
      <div className="top-grid">
        <HomePanel />

        <LeftRail
          active={active}
          setActive={setActive}
        />

        <ChatPanel />

        <PythonPanel />

        <MathPanel />
      </div>

      <PersonalityStrip
        selected={selected}
        setSelected={setSelected}
      />
    </main>
  );
}