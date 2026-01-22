import React, { useEffect, useState } from "react";
import { getApplications, updateStatus } from "../services/api";

export default function Dashboard() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    async function loadApps() {
      try {
        const res = await getApplications();
        if (Array.isArray(res.data)) {
          setApps(res.data);
        } else {
          setApps([]);
        }
      } catch {
        setApps([]);
      }
    }
    loadApps();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h3>Applications</h3>

      {apps.length === 0 && <p>No applications yet</p>}

      {apps.map(app => (
        <div key={app.id}>
          {app.title} – {app.status}
          <button onClick={() => updateStatus(app.id, "Interview")}>
            Interview
          </button>
          <button onClick={() => updateStatus(app.id, "Rejected")}>
            Rejected
          </button>
        </div>
      ))}
    </div>
  );
}
