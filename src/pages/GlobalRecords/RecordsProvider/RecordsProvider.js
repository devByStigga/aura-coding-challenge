import React, { createContext } from "react";

export const RecordsContext = createContext({});

function RecordsProvider({ children, values, error }) {
  const value = { values, error };

  return (
    <RecordsContext.Provider value={value}>{children}</RecordsContext.Provider>
  );
}

export default RecordsProvider;
