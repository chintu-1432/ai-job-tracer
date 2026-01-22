import React from "react";

export default function ApplyPopup({ job, onConfirm, onClose }) {
  return (
    <div className="popup">
      <div className="popup-box">
        <p>
          Did you apply to <b>{job.title}</b> at <b>{job.company}</b>?
        </p>
        <button className="apply-btn" onClick={onConfirm}>
          Yes, Applied
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
