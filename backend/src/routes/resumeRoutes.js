import { uploadResume } from "../controllers/resumeController.js";

export default async function resumeRoutes(app) {
  app.post("/resume", uploadResume);
}
