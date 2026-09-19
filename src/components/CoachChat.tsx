"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { sendCoachMessageAction, type ChatMessage } from "@/app/coach/actions";

export function CoachChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isPending]);

  function handleSend() {
    const content = input.trim();
    if (!content || isPending) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setInput("");
    setError(null);

    startTransition(async () => {
      const result = await sendCoachMessageAction(nextMessages);
      if ("error" in result) {
        setError(result.error);
        return;
      }
      setMessages((prev) => [...prev, { role: "assistant", content: result.reply }]);
    });
  }

  return (
    <div className="flex h-[calc(100vh-220px)] min-h-[400px] flex-col rounded-xl border border-border bg-surface">
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-6">
        {messages.length === 0 && (
          <p className="text-sm text-muted">
            Pose une question sur ta progression, demande un exercice pour t&apos;entraîner, ou
            demande ce qu&apos;il faut apprendre ensuite.
          </p>
        )}
        {messages.map((message, index) => (
          <ChatBubble key={index} message={message} />
        ))}
        {isPending && <p className="text-sm text-muted">Le coach réfléchit...</p>}
        {error && (
          <p className="rounded-lg bg-danger/15 px-4 py-3 text-sm text-danger">{error}</p>
        )}
        <div ref={bottomRef} />
      </div>
      <div className="flex gap-2 border-t border-border p-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          rows={2}
          placeholder="Écris ton message..."
          className="flex-1 resize-none rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
        />
        <button
          onClick={handleSend}
          disabled={isPending || !input.trim()}
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}

function ChatBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] whitespace-pre-wrap rounded-lg px-4 py-2.5 text-sm ${
          isUser ? "bg-accent text-accent-foreground" : "bg-surface-hover text-foreground"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
