
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Send, X, Minimize2, Maximize2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const ChatAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! How can I help you find the perfect internship today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const toggleChat = () => setIsOpen(!isOpen);
  const toggleMinimize = () => setIsMinimized(!isMinimized);

  // Function to generate AI response using OpenAI API
  const generateAIResponse = async (userMessage: string) => {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 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",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini", // Using the faster and cheaper model
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant for InternMatch, a platform for B.Tech students to find tech internships. Provide concise, accurate information about internships, application processes, and career advice. Keep responses brief and focused on helping students find suitable internships."
            },
            {
              role: "user",
              content: userMessage
            }
          ],
          max_tokens: 150,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error("Error generating AI response:", error);
      return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);
    
    try {
      // Get response from OpenAI
      const aiResponseText = await generateAIResponse(message);
      
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

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

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
      {/* Chat Button */}
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

      {/* Chat Window */}
      {isOpen && (
        <div 
          id="chat-container"
          className={`fixed ${isMinimized ? 'h-14 w-72' : 'h-[500px] w-[350px]'} max-h-[80vh] bottom-20 right-6 bg-white rounded-lg shadow-xl flex flex-col border border-gray-200 transition-all duration-300 ease-in-out z-40`}
        >
          {/* Chat Header */}
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

          {/* Chat Body */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex mb-4 ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-lg ${
                        msg.sender === "user"
                          ? "bg-intern-purple text-white rounded-br-none"
                          : "bg-white border border-gray-200 rounded-bl-none"
                      }`}
                    >
                      <div className="text-sm">{msg.content}</div>
                      <div
                        className={`text-xs mt-1 ${
                          msg.sender === "user" ? "text-gray-200" : "text-gray-500"
                        }`}
                      >
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start mb-4">
                    <div className="max-w-[80%] px-4 py-2 rounded-lg bg-white border border-gray-200">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 flex">
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
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatAI;
