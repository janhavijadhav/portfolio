"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = ["Projects", "Technical Skills", "Education"];

const WELCOME =
  "Hi! I can answer questions about Janhavi's background, skills, experience, and projects. What would you like to know?";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const next: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.content }]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "Something went wrong. Reach out to Janhavi at janhavij0603@gmail.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-widget-root" aria-live="polite">
      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="chat-panel"
            role="dialog"
            aria-label="Chat with Janhavi's AI assistant"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="chat-avatar" aria-hidden>JJ</div>
                <div>
                  <p className="chat-name">AI Assistant</p>
                  <p className="chat-subtitle">
                    <span className="chat-online-dot" aria-hidden />
                    Ask me anything
                  </p>
                </div>
              </div>
              <button
                className="chat-close-btn"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="chat-messages">
              {/* Welcome */}
              <div className="chat-welcome-msg">
                <p>{WELCOME}</p>
              </div>

              {messages.length === 0 && (
                <div className="chat-suggestions">
                  {SUGGESTIONS.map((q) => (
                    <button
                      key={q}
                      className="chat-suggestion-btn"
                      onClick={() => send(q)}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`chat-bubble chat-bubble-${msg.role}`}
                >
                  {msg.content}
                </div>
              ))}

              {loading && (
                <div className="chat-bubble chat-bubble-assistant">
                  <span className="chat-typing">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="chat-input-row">
              <input
                ref={inputRef}
                className="chat-input"
                placeholder="Ask anything about Janhavi…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                disabled={loading}
                aria-label="Message"
              />
              <button
                className="chat-send-btn"
                onClick={() => send(input)}
                disabled={!input.trim() || loading}
                aria-label="Send"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 8L2 2l2 6-2 6 12-6z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        className={`chat-fab ${open ? "chat-fab-open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.93 }}
        aria-label={open ? "Close chat" : "Chat with Janhavi's AI assistant"}
        title="Ask me about Janhavi"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.15 }}
              style={{ fontSize: "1rem" }}
            >
              ✕
            </motion.span>
          ) : (
            <motion.span
              key="label"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.15 }}
              className="chat-fab-label"
            >
              <span className="chat-fab-dot" aria-hidden />
              AI Chat
            </motion.span>
          )}
        </AnimatePresence>
        {!open && <span className="chat-fab-pulse" aria-hidden />}
      </motion.button>
    </div>
  );
}
