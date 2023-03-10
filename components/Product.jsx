import Image from "next/image";
import { formatPrice } from "../helpers";
import useCoffee from "../hooks/useCoffe";

const Product = ({ product }) => {
  const { handleSetProduct, handleChangeModal } = useCoffee();


  return (
    <div className="border p-3">
      <Image
        width={400}
        height={500}
        src={`/assets/images/${product?.image}.jpg`}
        alt={product?.name}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{product?.name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatPrice(product?.price)}
        </p>
        <button
          type="button"
          className="bg-amber-500 hover:bg-amber-700 text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={() => {
            handleChangeModal();
            handleSetProduct(product);
          }}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Product;
