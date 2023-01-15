import { useContext } from "react";
import CoffeeContext from "../context/coffeeProvider";

const useCoffe = () => {
  return useContext(CoffeeContext);
};

export default useCoffe;
