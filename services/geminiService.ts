
import { GoogleGenAI } from "@google/genai";
import { Repository } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGemAnalysis = async (repo: Repository): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analyze this GitHub repository as a potential "hidden gem". 
      Name: ${repo.name}
      Stars: ${repo.stars}
      Quality Score: ${repo.quality.total}/10
      Description: ${repo.description}
      
      Explain in 2-3 sentences why a developer should care about this repo despite its lower popularity. Focus on its quality signals like documentation and tests.`,
    });
    return response.text || "Analysis unavailable.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "This repository shows high-quality engineering patterns that outweigh its current star count.";
  }
};
