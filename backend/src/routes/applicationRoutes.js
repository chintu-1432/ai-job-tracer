import {
  addApplication,
  getApplications,
  updateStatus
} from "../controllers/applicationController.js";

export default async function applicationRoutes(app) {
  app.post("/apply", addApplication);
  app.get("/applications", getApplications);
  app.put("/applications/:id", updateStatus);
}
