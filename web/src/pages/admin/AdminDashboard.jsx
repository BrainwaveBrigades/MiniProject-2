import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      localStorage.clear(); // Clear local storage to remove session data
      sessionStorage.clear(); // Clear session storage
      navigate("/auth", { replace: true });

      // Prevent back navigation
      window.history.pushState(null, "", "/auth");
      window.onpopstate = () => {
        window.history.pushState(null, "", "/auth");
      };
    });
  };

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <button onClick={handleLogout} className="logout-btn">Logout</button>
    </div>
  );
};

export default Dashboard;
