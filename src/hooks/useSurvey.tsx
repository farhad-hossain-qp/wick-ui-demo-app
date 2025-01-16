import { useState, useEffect } from "react";
import axios from "axios";
import { ISurvey } from "../models/survey.models";

const useSurveyData = () => {
  const [surveys, setSurveys] = useState<ISurvey[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchSurveyData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/surveys");
        setSurveys(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching user data");
        setLoading(false);
        console.log(err);
      }
    };

    fetchSurveyData();
  }, []);

  return { surveys, loading, error };
};

export default useSurveyData;
