import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {

    const {dispatch} = useAuthContext()
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const signup = async (email, password) => {
    setLoading(true);
    setError(null);
    const response = await fetch("http://localhost:4000/api/user/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(data.error);
    }
    if (response.ok) {
        localStorage.setItem('user' , JSON.stringify(data))
        dispatch({
            type: "LOGIN",
            payload: data
        })
        setLoading(false)
    }
  };

  return {
    signup,
    loading,
    error,
  };
};
