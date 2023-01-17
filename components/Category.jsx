import Image from "next/image";
import useCoffee from "../hooks/useCoffe";

const Category = ({ category }) => {
  const { currentCategory, handleClickcategory } = useCoffee();
  const { name, icon, id } = category;

  return (
    <div
      className={`${
        currentCategory?.id === id ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/images/icon_${icon}.svg`}
        alt="Imagem do icone"
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickcategory(id)}
      >
        {name}
      </button>
    </div>
  );
};

export default Category;
