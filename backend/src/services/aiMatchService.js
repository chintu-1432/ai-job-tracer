import dotenv from "dotenv";
dotenv.config();   // 👈 VERY IMPORTANT (FIRST LINE)

import OpenAI from "openai";

let client = null;

// Create client ONLY if key exists
if (process.env.OPENAI_API_KEY) {
  client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
}

export async function getAiMatchScore(resumeText, jobDescription) {
  // 🔒 SAFETY FALLBACK (NO CRASH)
  if (!client) {
    return {
      score: 55,
      reasons: [
        "AI key not loaded, fallback logic used",
        "Basic keyword similarity detected"
      ]
    };
  }

  const prompt = `
You are an AI job matching system.

Resume:
${resumeText}

Job Description:
${jobDescription}

Return ONLY valid JSON:
{
  "score": number,
  "reasons": ["reason1", "reason2"]
}
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2
  });

  return JSON.parse(response.choices[0].message.content);
}
