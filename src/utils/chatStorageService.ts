
import { Message, ChatSession } from "@/types/chat";

const CHAT_STORAGE_KEY = "internmatch_chat_history";
const MAX_SESSIONS = 10; // Maximum number of chat sessions to keep

// Helper to ensure dates are properly serialized/deserialized
const prepareSessionForStorage = (session: ChatSession): any => {
  return {
    ...session,
    createdAt: session.createdAt.toISOString(),
    updatedAt: session.updatedAt.toISOString(),
    messages: session.messages.map(msg => ({
      ...msg,
      timestamp: msg.timestamp.toISOString()
    }))
  };
};

// Helper to restore Date objects from stored strings
const prepareSessionFromStorage = (storedSession: any): ChatSession => {
  return {
    ...storedSession,
    createdAt: new Date(storedSession.createdAt),
    updatedAt: new Date(storedSession.updatedAt),
    messages: storedSession.messages.map((msg: any) => ({
      ...msg,
      timestamp: new Date(msg.timestamp)
    }))
  };
};

// Save a chat session to local storage
export const saveChatSession = (session: ChatSession): void => {
  try {
    // Get existing sessions
    const storedSessions = localStorage.getItem(CHAT_STORAGE_KEY);
    let sessions: any[] = storedSessions ? JSON.parse(storedSessions) : [];
    
    // Find if this session exists
    const sessionIndex = sessions.findIndex(s => s.id === session.id);
    
    if (sessionIndex >= 0) {
      // Update existing session
      sessions[sessionIndex] = prepareSessionForStorage(session);
    } else {
      // Add new session
      sessions.push(prepareSessionForStorage(session));
    }
    
    // Limit the number of stored sessions
    if (sessions.length > MAX_SESSIONS) {
      sessions = sessions.slice(sessions.length - MAX_SESSIONS);
    }
    
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(sessions));
  } catch (error) {
    console.error("Error saving chat session to local storage:", error);
  }
};

// Get all chat sessions from local storage
export const getAllChatSessions = (): ChatSession[] => {
  try {
    const storedSessions = localStorage.getItem(CHAT_STORAGE_KEY);
    if (!storedSessions) return [];
    
    const sessions = JSON.parse(storedSessions);
    return sessions.map((session: any) => prepareSessionFromStorage(session));
  } catch (error) {
    console.error("Error getting chat sessions from local storage:", error);
    return [];
  }
};

// Get a specific chat session by ID
export const getChatSessionById = (sessionId: string): ChatSession | null => {
  try {
    const sessions = getAllChatSessions();
    const session = sessions.find(s => s.id === sessionId);
    return session || null;
  } catch (error) {
    console.error("Error getting chat session by ID:", error);
    return null;
  }
};

// Create a new chat session
export const createNewChatSession = (): ChatSession => {
  const newSession: ChatSession = {
    id: `session-${Date.now()}`,
    messages: [
      {
        id: "welcome",
        content: "Hello! How can I help you find the perfect internship today?",
        sender: "ai",
        timestamp: new Date(),
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  saveChatSession(newSession);
  return newSession;
};
