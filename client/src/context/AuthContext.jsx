import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const AuthReducers = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        user: state.workouts.filter((w) =>w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducers, {
    user: null,
  });
  console.log(state)
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};