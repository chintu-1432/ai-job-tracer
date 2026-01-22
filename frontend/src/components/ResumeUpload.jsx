import React from "react";
import { uploadResume } from "../services/api";

export default function ResumeUpload() {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const text = await file.text();
    await uploadResume(text);
    alert("Resume uploaded");
  };

  return <input type="file" onChange={handleUpload} />;
}
