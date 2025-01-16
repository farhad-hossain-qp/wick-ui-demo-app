import { useState, useEffect } from "react";
import axios from "axios";
import { IUser } from "../models/user.models";

const useUserData = () => {
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/user");
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching user data");
        setLoading(false);
        console.log(err);
      }
    };

    fetchUserData();
  }, []);

  return { user, loading, error };
};

export default useUserData;
