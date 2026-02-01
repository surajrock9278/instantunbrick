import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY not found in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const diagnoseIssue = async (userDescription: string, modelName: string) => {
  const client = getClient();
  if (!client) return { text: "Error: API Key missing." };

  try {
    const response = await client.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert Xiaomi smartphone technician. 
      The user is describing a problem with their phone. 
      Analyze the symptoms and provide a "Likely Diagnosis" and a "Recommended Action". 
      Keep it brief (under 100 words).
      If it sounds like a hardware issue (water damage, broken screen), say so.
      If it sounds like a soft brick, hard brick, or bootloop, explain that "Instant Unbrick" can likely fix it remotely.
      
      User's description: "${userDescription}"`,
    });
    return { text: response.text };
  } catch (error) {
    console.error("Gemini diagnosis failed", error);
    return { text: "I'm having trouble analyzing that right now. Please try describing it differently or proceed to booking." };
  }
};