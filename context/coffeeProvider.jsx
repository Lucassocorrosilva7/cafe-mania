import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CoffeeContext = createContext();

const CoffeeProvider = ({ children }) => {
  const [categorys, setCategorys] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);

  const obterCategorys = async () => {
    const { data } = await axios("/api/category");
    setCategorys(data);
  };

  useEffect(() => {
    obterCategorys();
  }, []);

  useEffect(() => {
    setCurrentCategory(categorys[0]);
  }, [categorys]);

  const handleClickcategory = (id) => {
    const category = categorys.filter((cat) => cat.id === id);
    setCurrentCategory(category[0]);
  };

  const handleSetProduct = (product) => {
    setProduct(product);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAddOrder = ({categoryId, image, ...product}) => {
    setOrder([...order, product])
  };

  return (
    <CoffeeContext.Provider
      value={{
        categorys,
        currentCategory,
        handleClickcategory,
        product,
        handleSetProduct,
        modal,
        handleChangeModal,
        handleAddOrder,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};

export { CoffeeProvider };

export default CoffeeContext;
