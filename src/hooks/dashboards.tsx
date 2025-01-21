import { useState, useEffect } from "react";
import axios from "axios";
import { IDashboard } from "../models/dashboard.models";

const useDashboardData = () => {
  const [dashboard, setDashboard] = useState<IDashboard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/dashboards");
        setDashboard(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching user data");
        setLoading(false);
        console.log(err);
      }
    };

    fetchUserData();
  }, []);

  return { dashboard, loading, error };
};

export default useDashboardData;
