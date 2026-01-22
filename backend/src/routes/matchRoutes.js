import { matchJobs } from "../controllers/matchController.js";

export default async function matchRoutes(app) {
  app.get("/match", matchJobs);
}
