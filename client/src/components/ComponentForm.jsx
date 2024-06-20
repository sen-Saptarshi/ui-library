import React, { useState } from "react";
import { createComponent } from "../api/api";

const ComponentForm = () => {
  const [name, setName] = useState("");
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComponent = { name, html, css, js };

    try {
      const createdComponent = await createComponent(newComponent);
      console.log("Component created:", createdComponent);
      // Clear form fields
      setName("");
      setHtml("");
      setCss("");
      setJs("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>HTML</label>
        <textarea value={html} onChange={(e) => setHtml(e.target.value)} />
      </div>
      <div>
        <label>CSS</label>
        <textarea value={css} onChange={(e) => setCss(e.target.value)} />
      </div>
      <div>
        <label>JavaScript</label>
        <textarea value={js} onChange={(e) => setJs(e.target.value)} />
      </div>
      <button type="submit">Create Component</button>
    </form>
  );
};

export default ComponentForm;
