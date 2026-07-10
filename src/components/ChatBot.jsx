import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { FaRobot, FaTimes } from "react-icons/fa";
import { styles } from "../assets/styles";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat, loading]);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message;

    setChat((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: userMessage,
      });

      setChat((prev) => [
        ...prev,
        {
          role: "bot",
          text: response.text,
        },
      ]);
    } catch (error) {
      console.error(error);

      setChat((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Sorry, something went wrong. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.chatbot.floatingButton}
      >
        {isOpen ? <FaTimes size={22} /> : <FaRobot size={24} 
        className="text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-pulse"
        />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatbot.window}>
          {/* Header */}
          <div className={styles.chatbot.header}>
            <h3 className="text-lg font-semibold">
              AI Portfolio Assistant
            </h3>

            <p className="text-xs text-blue-100 mt-1">
              Ask me queries, thoughts or anything.
            </p>
          </div>

          {/* Messages */}
          <div className={styles.chatbot.messages}>
            {chat.length === 0 ? (
              <div className={styles.chatbot.emptyText}>
                <p className="mb-4 text-lg">👋 Welcome!</p>

                <p>
                  I'm Harsh's AI assistant.
                </p>

                <ul className="mt-5 space-y-2 text-left inline-block">
                  <li> Ask anything through below ↓ </li>
                </ul>
              </div>
            ) : (
              <>
                {chat.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.role === "user"
                        ? "flex justify-end"
                        : "flex justify-start"
                    }`}
                  >
                    <span
                      className={
                        msg.role === "user"
                          ? styles.chatbot.userBubble
                          : styles.chatbot.botBubble
                      }
                    >
                      {msg.text}
                    </span>
                  </div>
                ))}

                {loading && (
                  <div className="flex justify-start">
                    <span className={styles.chatbot.botBubble}>
                      Thinking...
                    </span>
                  </div>
                )}

                <div ref={bottomRef}></div>
              </>
            )}
          </div>

          {/* Input */}
          <div className={styles.chatbot.inputContainer}>
            <input
              type="text"
              placeholder="Ask something..."
              className={styles.chatbot.input}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className={styles.chatbot.sendButton}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;