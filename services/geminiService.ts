import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

// Initialize client safely
const getAiClient = () => {
  if (!aiClient) {
    // Using the environment variable as specified in instructions
    const apiKey = process.env.API_KEY || '';
    if (apiKey) {
      aiClient = new GoogleGenAI({ apiKey });
    } else {
      console.warn("API_KEY not found in environment variables.");
    }
  }
  return aiClient;
};

export const sendChatMessage = async (message: string): Promise<string> => {
  const client = getAiClient();
  
  if (!client) {
    return "I'm sorry, I cannot connect to the server right now. Please try again later or use the contact form.";
  }

  try {
    // Use gemini-2.5-flash for quick responses
    const modelId = 'gemini-2.5-flash';
    
    const response = await client.models.generateContent({
      model: modelId,
      contents: message,
      config: {
        systemInstruction: `You are TTiA's AI Assistant. TTiA is a digital transformation company specializing in:
        1. MCP (Model Context Protocol) Server Development.
        2. Digital Transformation Consulting.
        3. Third-party digital product integration.
        
        Your tone should be professional, innovative, and helpful.
        Keep answers concise (under 100 words).
        If a user asks about pricing, refer them to the Pricing section or suggest contacting sales.
        If asked for a quote, ask them to fill out the form below.
        
        The company emphasizes bridging human creativity with machine efficiency.
        Colors of the brand are Dark Grey, Cream, Green, and Orange.`,
      },
    });

    return response.text || "I didn't receive a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm experiencing technical difficulties. Please reach out via email.";
  }
};