import React from "react";
import MatchBadge from "./MatchBadge";

export default function JobCard({ job, onApply }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <div className="job-meta">
        {job.company} • {job.location} • {job.type}
      </div>

      <div className="job-desc">{job.description}</div>

      <MatchBadge score={job.matchScore} />

      <ul>
        {job.reasons?.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      <button className="apply-btn" onClick={() => onApply(job)}>
        Apply
      </button>
    </div>
  );
}
