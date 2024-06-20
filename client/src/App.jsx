import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ComponentList from "./components/ComponentList";
import ComponentForm from "./components/ComponentForm";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create Component</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ComponentList />} />
          <Route path="/create" element={<ComponentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
