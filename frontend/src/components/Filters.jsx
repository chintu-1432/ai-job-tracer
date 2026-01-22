import React from "react";

export default function Filters({ filters, setFilters }) {
  return (
    <div className="filters">
      <input
        placeholder="Job title (react)"
        value={filters.title}
        onChange={(e) =>
          setFilters({ ...filters, title: e.target.value })
        }
      />

      <input
        placeholder="Location"
        value={filters.location}
        onChange={(e) =>
          setFilters({ ...filters, location: e.target.value })
        }
      />

      <select
        value={filters.match}
        onChange={(e) =>
          setFilters({ ...filters, match: e.target.value })
        }
      >
        <option value="all">All Matches</option>
        <option value="high">High (&gt;70%)</option>
        <option value="medium">Medium (40–70%)</option>
      </select>
    </div>
  );
}
