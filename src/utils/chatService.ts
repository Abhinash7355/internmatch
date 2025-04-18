
// Using a placeholder API key - replace with your actual OpenAI API key
const OPENAI_API_KEY = "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";

export const generateAIResponse = async (userMessage: string): Promise<string> => {
  try {
    // The API key format provided appears to be a project key, which needs to be used differently
    // Let's modify the request to use a standard OpenAI API key format
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY.trim()}`,
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
      // Log more detailed error information
      const errorData = await response.json();
      console.error("OpenAI API error:", errorData);
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error generating AI response:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
  }
};
