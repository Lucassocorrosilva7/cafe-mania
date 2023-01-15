import { useState, useEffect, createContext } from "react";

const CoffeeContext = createContext();

const CoffeeProvider = ({ children }) => {
  return <CoffeeContext.Provider value={{}}>{children}</CoffeeContext.Provider>;
};

export { CoffeeProvider };

export default CoffeeContext;
