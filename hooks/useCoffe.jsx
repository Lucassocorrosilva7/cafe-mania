import { useContext } from "react";
import CoffeeContext from "../context/coffeeProvider";

const useCoffee = () => {
  return useContext(CoffeeContext);
};

export default useCoffee;
