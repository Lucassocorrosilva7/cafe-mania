import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CoffeeContext = createContext();

const CoffeeProvider = ({ children }) => {
  const [categorys, setCategorys] = useState([]);
  const [currentCategorys, setCurrentCategorys] = useState({});

  const obterCategory = async () => {
    try {
      const { data } = await axios("/api/category");
      setCategorys(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obterCategory();
  }, []);

  const handleClickcategory = (id) => {
    const category = categorys.filter(cat => cat.id === id)
    setCurrentCategorys(category[0])
  }


  return (
    <CoffeeContext.Provider
      value={{
        categorys,
        currentCategorys,
        handleClickcategory
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};

export { CoffeeProvider };

export default CoffeeContext;
