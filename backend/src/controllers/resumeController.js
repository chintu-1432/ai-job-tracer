let resumeText = "";

export function uploadResume(req, reply) {
  const { text } = req.body;
  resumeText = text;
  reply.send({ message: "Resume uploaded successfully" });
}

export function getResume() {
  return resumeText;
}
