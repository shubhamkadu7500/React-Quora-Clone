import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { PostDataProvider } from "./createcontext/PostContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PostDataProvider>
    <Router>
      <App />
    </Router>
  </PostDataProvider>
);
