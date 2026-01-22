export function calculateScore(resumeText, jobDescription) {
  if (!resumeText || !jobDescription) return 0;

  const resume = resumeText.toLowerCase();
  const job = jobDescription.toLowerCase();

  const resumeWords = new Set(resume.split(/\W+/));
  const jobWords = job.split(/\W+/);

  let matched = 0;

  for (const word of jobWords) {
    if (resumeWords.has(word)) {
      matched++;
    }
  }

  const score = Math.floor((matched / jobWords.length) * 100);

  return Math.min(score, 100);
}
