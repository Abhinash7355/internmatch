
import React, { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    onSendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex">
      <Input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 bg-gray-50"
        disabled={isLoading}
      />
      <Button
        type="submit"
        className="ml-2 bg-intern-purple hover:bg-intern-dark-purple"
        disabled={isLoading || !message.trim()}
      >
        <Send size={18} />
      </Button>
    </form>
  );
};

export default ChatInput;
