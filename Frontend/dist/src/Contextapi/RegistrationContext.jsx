import React, { createContext, useState } from "react";
import axios from "axios";
import apiList from "../api.json";

const BASE_URL = (process.env.REACT_APP_API_BASE_URL || "http://localhost:8000").replace(/\/$/, "");

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const request = async (path, data, headers) => {
    const url = `${BASE_URL}${path}`;
    const response = await axios.post(url, data, { headers });
    const payload = response.data || {};
    if (payload.message_type === "error") {
      throw new Error(payload.message || "Request failed");
    }
    return payload;
  };

  const submitRegistration = async (formData) => {
    setLoading(true);
    try {
      return await request(apiList.login.register, formData, {
        "Content-Type": "multipart/form-data",
      });
    } catch (err) {
      if (err.response) {
        throw new Error(err.response.data.message || JSON.stringify(err.response.data));
      }
      if (err.request) {
        throw new Error("No response from server");
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const submitContact = async (payload) => {
    setLoading(true);
    try {
      return await request(apiList.contact, payload, {
        "Content-Type": "application/json",
      });
    } catch (err) {
      if (err.response) {
        throw new Error(err.response.data.message || JSON.stringify(err.response.data));
      }
      if (err.request) {
        throw new Error("No response from server. Start the backend on port 8000.");
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegistrationContext.Provider value={{ submitRegistration, submitContact, loading }}>
      {children}
    </RegistrationContext.Provider>
  );
};
