"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, AlertCircle, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  role: "user" | "model";
  text: string;
}

export default function AdmissionsChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Welcome to NIMT Beacon School! I am your AI Admissions Counselor. Ask me anything about our academic curriculum, safe  boarding houses, integrated NEET/JEE programs, sports facilities, or Ghaziabad campus!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const predefinedQuestions = [
    "What boarding programs do you offer?",
    "Tell me about the NEET/JEE integrated program.",
    "Do you have a shooting range?",
    "How to apply for 2026 Admissions?",
  ];

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = { role: "user", text: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error("Admissions bot ofline");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "model", text: data.text }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "I apologize, but I am facing a temporary network issue. Please drop us a message on WhatsApp or clear your admissions query in the contact form below, and our team will get in touch directly!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="ai-chatbot-root" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Trigger Button */}
     

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chatbot-window"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[90vw] sm:w-[400px] h-[500px] bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0041f5] to-[#08a7e6] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/20">
                  <Sparkles className="w-4 h-4 text-[#fffc4d]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm">Admissions Counselor</h4>
                  <p className="text-[10px] text-white/80 uppercase tracking-widest">NIMT Beacon AI</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/15"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Informational Toast */}
            <div className="bg-slate-50 dark:bg-slate-950 px-4 py-2 border-b border-gray-100 dark:border-slate-800 flex items-center gap-2 text-[11px] text-slate-500">
              <AlertCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>Admissions are open for 2026-27 cohort. Limited seats.</span>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin scrollbar-thumb-gray-200">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                      m.role === "user"
                        ? "bg-[#0041f5] text-white rounded-br-none"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#0041f5] rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-[#0041f5] rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-[#0041f5] rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggestions Container */}
            {messages.length < 3 && (
              <div className="p-2 border-t border-gray-100 dark:border-slate-800 bg-slate-55/50 flex flex-wrap gap-1.5 justify-center">
                {predefinedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(q)}
                    className="text-[10px] bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 hover:text-blue-600 dark:hover:text-amber-300 py-1.5 px-3 rounded-full text-slate-600 dark:text-slate-300 border border-gray-150 dark:border-slate-700 transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 border-t border-gray-100 dark:border-slate-800 flex gap-2 bg-white dark:bg-slate-900"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your admissions question..."
                className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-full px-4 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-[#0041f5] border border-transparent focus:border-transparent"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 bg-[#0041f5] hover:bg-blue-700 disabled:opacity-40 text-white rounded-full transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
