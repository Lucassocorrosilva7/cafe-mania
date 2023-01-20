import Product from "../components/Product";
import useCoffee from "../hooks/useCoffe";
import Layout from "../layout/Layout";

export default function Home() {
  const { currentCategory } = useCoffee();

  return (
    <Layout page={`Menu - ${currentCategory?.name}`}>
      <h1 className="text-4xl font-black">{currentCategory?.name}</h1>
      <p className="text-2xl my-10">
        Escolha e personalize seu pedido para continuar
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {currentCategory?.products?.map((products) => (
          <Product key={products.id} product={products} />
        ))}
      </div>
    </Layout>
  );
}
