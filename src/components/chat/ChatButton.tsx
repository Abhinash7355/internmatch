
import React from "react";
import { X } from "lucide-react";

interface ChatButtonProps {
  isOpen: boolean;
  toggleChat: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ isOpen, toggleChat }) => {
  return (
    <button
      id="chat-button"
      onClick={toggleChat}
      className="fixed bottom-6 right-6 bg-intern-purple text-white rounded-full p-4 shadow-lg hover:bg-intern-dark-purple transition-all duration-300 z-50"
      aria-label="Chat with AI assistant"
    >
      {isOpen ? (
        <X className="h-6 w-6" />
      ) : (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-6 w-6"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )}
    </button>
  );
};

export default ChatButton;
