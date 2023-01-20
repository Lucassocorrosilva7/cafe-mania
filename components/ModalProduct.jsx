import { useState } from "react";
import Image from "next/image";
import useCoffee from "../hooks/useCoffe";
import { formatPrice } from "../helpers";

const ModalProduct = () => {
  const { product, handleChangeModal,handleAddOrder } = useCoffee();
  const [amount, setAmount] = useState(1);
  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          alt={`imagem produto ${product?.name}`}
          src={`/assets/images/${product?.image}.jpg`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{product?.name}</h1>
        <p className="mt-5 font-black text-5xl text-amber-400">
          {formatPrice(product?.price)}
        </p>

        <div className="flex gap-4 mt-5 items-center">
          <button
            type="button"
            onClick={() => {
              if (amount <= 1) return;
              setAmount(amount - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <p className="text-3xl">{amount}</p>
          <button
            type="button"
            onClick={() => {
              if (amount >= 5) return;
              setAmount(amount + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <button
          onClick={() => handleAddOrder({product,amount})}  
          type="button"
          className="bg-amber-500 hover:bg-amber-700 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
        >
          Adicionar ao pedido
        </button>
      </div>
    </div>
  );
};

export default ModalProduct;
