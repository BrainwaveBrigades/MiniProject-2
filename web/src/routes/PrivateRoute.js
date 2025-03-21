import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { getUserRole } from "../firebase/authService";

const PrivateRoute = ({ children, allowedRoles }) => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchRole = async () => {
      const userRole = await getUserRole();
      setRole(userRole);
      setLoading(false);
    };

    fetchRole();
  }, []);

  useEffect(() => {
    if (!auth.currentUser) {
      window.history.pushState(null, "", location.pathname);
      window.onpopstate = () => {
        window.history.pushState(null, "", location.pathname);
      };
    }
  }, [auth.currentUser, location.pathname]);

  if (loading) return <p>Loading...</p>;
  if (!auth.currentUser || !allowedRoles.includes(role)) return <Navigate to="/auth" replace />;

  return children;
};

export default PrivateRoute;
