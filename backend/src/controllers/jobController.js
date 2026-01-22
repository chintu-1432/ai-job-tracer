import { fetchJobs } from "../services/jobApiService.js";

export async function getJobs(req, reply) {
  const jobs = await fetchJobs();
  reply.send(jobs);
}
