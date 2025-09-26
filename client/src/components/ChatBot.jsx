import React, { useState, useRef, useEffect } from "react";
import "./ChatBot.css";

const FAQ = {
  hello: "Hello! How can I help you ",
  hi: "Hi there! 👋",
  timings: "We are open from 9 AM to 7 PM, Monday to Saturday.",
  contact: "Call us at +91-9876543210 or email: info@thecounselingcafe.in",
  services: "We offer counseling, therapy sessions, and career guidance.",
  booking: "To book, please call +91-9876543210 or use our Contact form on the website.",
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I am your assistant 🤖. Ask me anything." },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  // auto-scroll to bottom
  useEffect(() => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const addUserMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { from: "user", text: trimmed }]);
    handleReply(trimmed);
  };

  const handleReply = (text) => {
    const key = text.toLowerCase().trim();
    const reply = FAQ[key] || 
      "Sorry, I don't understand that yet. Please contact us at +91-9876543210.";
    // small delay to simulate typing
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    }, 300);
  };

  const handleSend = () => {
    addUserMessage(input);
    setInput("");
  };

  return (
    <div>
      {/* Chat window */}
      {open && (
        <div className="cc-window">
          <div className="cc-header">
            <div> Counseling Cafe — Chatbot 🤖</div>
            <button className="cc-close" onClick={() => setOpen(false)}>×</button>
          </div>

          <div className="cc-body">
            {messages.map((m, i) => (
              <div key={i} className={`cc-message ${m.from === "user" ? "cc-user" : "cc-bot"}`}>
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="cc-actions">
            <input
              className="cc-input"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
            />
            <button className="cc-send" onClick={handleSend}>Send</button>
          </div>

          <div className="cc-quick">
            {["timings","contact","services","booking"].map((q) => (
              <button key={q} className="cc-quick-btn" onClick={() => addUserMessage(q)}>
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating robot toggle (inline SVG so no package needed) */}
      <button className="cc-toggle" onClick={() => setOpen((v) => !v)} aria-label="Open chat">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="7" width="18" height="11" rx="2" stroke="white" strokeWidth="1.2" fill="#2563EB"/>
          <circle cx="8" cy="12" r="1.4" fill="white"/>
          <circle cx="16" cy="12" r="1.4" fill="white"/>
          <rect x="10" y="3" width="4" height="3" rx="1" fill="#2563EB"/>
        </svg>
      </button>
    </div>
  );
}
