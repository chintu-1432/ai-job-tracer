import { getJobs } from "../controllers/jobController.js";

export default async function jobRoutes(app) {
  app.get("/jobs", getJobs);
}
