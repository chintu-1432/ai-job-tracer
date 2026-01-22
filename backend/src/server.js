import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";

import jobRoutes from "./routes/jobRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";

dotenv.config();

const app = Fastify({ logger: true });

await app.register(cors, {
  origin: true
});

app.register(jobRoutes);
app.register(resumeRoutes);
app.register(matchRoutes);
app.register(applicationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  { port: PORT, host: "0.0.0.0" },
  () => {
    console.log(`Backend running on port ${PORT}`);
  }
);

