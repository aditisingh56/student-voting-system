import React from "react";
import ReactDOM from "react-dom/client";
import VotingApp from "./VoteApp/VotingApp.jsx"; // ✅ correct relative path!
import "./VoteApp/Styles.css"; // ✅ correct relative path!

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VotingApp />
  </React.StrictMode>
);
