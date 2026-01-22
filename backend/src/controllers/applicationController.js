let applications = [];

export function addApplication(req, reply) {
  const appData = {
    id: Date.now(),
    ...req.body,
    status: "Applied",
    timestamp: new Date()
  };

  applications.push(appData);
  reply.send(appData);
}

export function getApplications(req, reply) {
  reply.send(applications);
}

export function updateStatus(req, reply) {
  const { id } = req.params;
  const { status } = req.body;

  const app = applications.find(a => a.id == id);
  if (!app) {
    return reply.status(404).send({ error: "Application not found" });
  }

  app.status = status;
  reply.send(app);
}
