import React, { useEffect, useState } from "react";
import { getComponents } from "../api/api";

const ComponentList = () => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const data = await getComponents();
        setComponents(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchComponents();
  }, []);

  return (
    <div>
      <h1>UI Components</h1>
      {components.map((component) => (
        <div key={component._id}>
          <h2>{component.name}</h2>
          <div dangerouslySetInnerHTML={{ __html: component.html }} />
          <style>{component.css}</style>
          <script>{component.js}</script>
        </div>
      ))}
    </div>
  );
};

export default ComponentList;
