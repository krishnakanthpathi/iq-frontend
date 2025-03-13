import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MultiTextEditor = () => {
  const [editorType, setEditorType] = useState("text");
  const [content, setContent] = useState("");

  return (
    <div className="container mt-4" style={{ backgroundColor: "#1e1e1e", color: "#ffffff", padding: "20px", borderRadius: "10px" }}>
      <div className="mb-3">
        <label className="form-label" style={{ color: "#f8f9fa" }}>Select Editor Type</label>
        <select className="form-select bg-dark text-light" value={editorType} onChange={(e) => setEditorType(e.target.value)}>
          <option value="text">Plain Text Editor</option>
          <option value="code">Code Editor</option>
        </select>
      </div>

      <div className="card bg-dark text-light">
        <div className="card-body">
          {editorType === "text" && (
            <textarea
              className="form-control bg-secondary text-white"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Type here..."
              rows="6"
            />
          )}

          {editorType === "code" && (
            <textarea
              className="form-control font-monospace bg-secondary text-warning"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your code here..."
              rows="6"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiTextEditor;
