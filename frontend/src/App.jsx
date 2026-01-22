import React from "react";
import JobFeed from "./pages/JobFeed";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>AI Job Tracker</h2>
      <JobFeed />
      <Dashboard />
    </>
  );
}
