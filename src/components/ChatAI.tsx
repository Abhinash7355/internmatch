
import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Message } from "@/types/chat";
import { generateAIResponse } from "@/utils/chatService";
import ChatButton from "./chat/ChatButton";
import ChatHeader from "./chat/ChatHeader";
import ChatMessages from "./chat/ChatMessages";
import ChatInput from "./chat/ChatInput";

const ChatAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! How can I help you find the perfect internship today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const toggleChat = () => setIsOpen(!isOpen);
  const toggleMinimize = () => setIsMinimized(!isMinimized);

  const handleSendMessage = async (messageText: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageText,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      // Get response from OpenAI
      const aiResponseText = await generateAIResponse(messageText);
      
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        content: aiResponseText,
        sender: "ai",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error in chat:", error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle outside click to close chat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const chatElement = document.getElementById("chat-container");
      if (chatElement && !chatElement.contains(event.target as Node) && isOpen && !isMinimized) {
        // Don't close if clicking on the chat button
        const chatButton = document.getElementById("chat-button");
        if (chatButton && !chatButton.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, isMinimized]);

  return (
    <>
      <ChatButton isOpen={isOpen} toggleChat={toggleChat} />

      {/* Chat Window */}
      {isOpen && (
        <div 
          id="chat-container"
          className={`fixed ${isMinimized ? 'h-14 w-72' : 'h-[500px] w-[350px]'} max-h-[80vh] bottom-20 right-6 bg-white rounded-lg shadow-xl flex flex-col border border-gray-200 transition-all duration-300 ease-in-out z-40`}
        >
          <ChatHeader 
            isMinimized={isMinimized} 
            toggleMinimize={toggleMinimize} 
            toggleChat={toggleChat} 
          />

          {/* Chat Body */}
          {!isMinimized && (
            <>
              <ChatMessages messages={messages} isLoading={isLoading} />
              <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatAI;
