
import React from "react";
import { X, Minimize2, Maximize2 } from "lucide-react";

interface ChatHeaderProps {
  isMinimized: boolean;
  toggleMinimize: () => void;
  toggleChat: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  isMinimized, 
  toggleMinimize, 
  toggleChat 
}) => {
  return (
    <div className="bg-intern-purple text-white p-3 rounded-t-lg flex justify-between items-center">
      {isMinimized ? (
        <span className="font-medium">Chat with InternMatch AI</span>
      ) : (
        <div className="flex items-center">
          <div className="bg-white rounded-full p-1 mr-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-intern-purple"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <span className="font-medium">InternMatch AI Assistant</span>
        </div>
      )}
      <div className="flex items-center">
        <button 
          onClick={toggleMinimize} 
          className="text-white hover:text-gray-200 mr-2"
          aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
        >
          {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
        </button>
        <button 
          onClick={toggleChat} 
          className="text-white hover:text-gray-200"
          aria-label="Close chat"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
