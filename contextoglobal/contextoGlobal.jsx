import React, { useReducer } from "react";
import { useContext, createContext } from "react";
import { REDUCER, acciones } from "../types";
export const ContextoGlobalYamir = createContext();

export const ContextoGlobal = ({ children }) => {
  const [state, dispatch] = useReducer(REDUCER, []);
  const data = {
    state,
    dispatch,
  };

  return (
    <ContextoGlobalYamir.Provider value={data}>
      {children}
    </ContextoGlobalYamir.Provider>
  );
};

export default ContextoGlobal;
