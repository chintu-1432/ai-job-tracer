import React, { useEffect, useState } from "react";
import { getMatchedJobs, applyJob } from "../services/api";

import JobCard from "../components/JobCard";
import ResumeUpload from "../components/ResumeUpload";
import ApplyPopup from "../components/ApplyPopup";
import Filters from "../components/Filters";
import AiChatSidebar from "../sidebar/AiChatSidebar";

export default function JobFeed() {
  // ---------------- STATE ----------------
  const [jobs, setJobs] = useState([]);          // always array
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  const [filters, setFilters] = useState({
    title: "",
    location: "",
    match: "all"
  });

  // ---------------- FETCH JOBS ----------------
  useEffect(() => {
    async function loadJobs() {
      try {
        const res = await getMatchedJobs();

        // 🔒 CRITICAL DEFENSIVE CHECK
        if (Array.isArray(res.data)) {
          setJobs(res.data);
        } else {
          console.warn("Expected array, got:", res.data);
          setJobs([]);
        }
      } catch (err) {
        console.warn("Match API failed. Resume may not be uploaded yet.");
        setJobs([]);
      } finally {
        setLoading(false);
      }
    }

    loadJobs();
  }, []);

  // ---------------- APPLY JOB ----------------
  const confirmApply = async () => {
    if (!selectedJob) return;

    try {
      await applyJob(selectedJob);
      alert("Application saved");
    } catch {
      alert("Failed to save application");
    }

    setSelectedJob(null);
  };

  // ---------------- FILTER LOGIC (SAFE) ----------------
  const filteredJobs = Array.isArray(jobs)
    ? jobs.filter((job) => {
        // Title filter (loose match)
        if (
          filters.title &&
          !job.title.toLowerCase().includes(filters.title.toLowerCase())
        ) {
          return false;
        }

        // Location filter
        if (
          filters.location &&
          !job.location.toLowerCase().includes(filters.location.toLowerCase())
        ) {
          return false;
        }

        // Match score filter
        if (filters.match === "high" && job.matchScore < 70) return false;

        if (
          filters.match === "medium" &&
          (job.matchScore < 40 || job.matchScore > 70)
        ) {
          return false;
        }

        return true;
      })
    : [];

  // ---------------- UI ----------------
  if (loading) {
    return <p>Loading jobs...</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Job Feed</h2>

      {/* Resume Upload */}
      <ResumeUpload />

      {/* Filters */}
      <Filters filters={filters} setFilters={setFilters} />

      {/* Job List */}
      {filteredJobs.length === 0 && (
        <p>No jobs found. Upload resume or clear filters.</p>
      )}

      {filteredJobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          onApply={setSelectedJob}
        />
      ))}

      {/* Apply Popup */}
      {selectedJob && (
        <ApplyPopup
          job={selectedJob}
          onConfirm={confirmApply}
          onClose={() => setSelectedJob(null)}
        />
      )}

      {/* AI Sidebar */}
      <AiChatSidebar jobs={jobs} />
    </div>
  );
}
