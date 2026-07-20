import { useState } from "react";
import { Play, Send, MessageCircle } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: string;
  message: string;
}

interface LiveViewProps {
  webinar: { id: string; title: string };
}

const MOCK_MESSAGES: ChatMessage[] = [
  { id: "1", sender: "Ama K.", message: "This is amazing content!" },
  { id: "2", sender: "Kofi M.", message: "Can you share the slides?" },
  { id: "3", sender: "Efua A.", message: "Great insights, thank you!" },
];

export default function LiveView({ webinar }: LiveViewProps) {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(MOCK_MESSAGES);

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), sender: "You", message: message.trim() },
    ]);
    setMessage("");
  };

  const chatPanel = (
    <div className="w-80 bg-white border-l border-[#E4E1DC] flex flex-col h-full">
      <div className="p-3 border-b border-[#E4E1DC]">
        <span className="text-sm font-bold text-[#141414]">Chat</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((msg) => (
          <div key={msg.id}>
            <span className="text-xs font-semibold text-[#141414]">
              {msg.sender}
            </span>
            <p className="text-sm text-[#3A3A3A]">{msg.message}</p>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-[#E4E1DC] flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 h-9 border border-[#E4E1DC] rounded-[7px] px-3 text-sm outline-none focus:border-[#D62828]"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="w-9 h-9 bg-[#D62828] text-white rounded-[7px] flex items-center justify-center"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <div className="flex-1 flex flex-col min-h-[300px]">
        <div className="flex-1 bg-[#141414] flex items-center justify-center min-h-[300px] relative">
          <Play className="w-16 h-16 text-white/30" />
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <span className="text-white text-sm font-semibold">
              {webinar.title}
            </span>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex">{chatPanel}</div>

      {chatOpen && (
        <div className="fixed inset-0 z-20 lg:hidden flex">
          <div
            className="flex-1 bg-black/40"
            onClick={() => setChatOpen(false)}
          />
          <div className="w-80">{chatPanel}</div>
        </div>
      )}

      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-4 right-4 z-10 lg:hidden bg-[#D62828] text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg"
      >
        <MessageCircle className="w-4 h-4" />
        Chat
      </button>
    </div>
  );
}
