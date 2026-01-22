import React, { useState } from "react";

export default function AiChatSidebar({ jobs }) {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState([]);

  const handleAsk = () => {
    if (!Array.isArray(jobs)) return;

    let result = jobs;
    const q = query.toLowerCase();

    if (q.includes("react")) {
      result = result.filter(j => j.title.toLowerCase().includes("react"));
    }

    if (q.includes("remote")) {
      result = result.filter(j => j.location.toLowerCase().includes("remote"));
    }

    if (q.includes("highest")) {
      result = [...result].sort((a,b)=>b.matchScore-a.matchScore).slice(0,5);
    }

    if (result.length === 0) result = jobs.slice(0, 5);

    setResponse(result);
  };

  return (
    <div className="ai-sidebar">
      <h4>AI Assistant</h4>

      <input
        placeholder="react jobs, remote jobs"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleAsk}>Ask</button>

      <ul>
        {response.map(job => (
          <li key={job.id}>
            {job.title} ({job.matchScore}%)
          </li>
        ))}
      </ul>
    </div>
  );
}
