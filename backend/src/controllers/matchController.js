import { fetchJobs } from "../services/jobApiService.js";
import { getResume } from "./resumeController.js";
import { getAiMatchScore } from "../services/aiMatchService.js";

export async function matchJobs(req, reply) {
  const resume = getResume();
  if (!resume) {
    return reply.status(400).send({ error: "Resume not uploaded" });
  }

  const jobs = await fetchJobs();
  const results = [];

  for (const job of jobs) {
    const aiResult = await getAiMatchScore(resume, job.description);
    results.push({
      ...job,
      matchScore: aiResult.score,
      reasons: aiResult.reasons
    });
  }

  reply.send(results);
}
