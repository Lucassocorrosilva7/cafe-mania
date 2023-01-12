import { categorys } from "./data/categorys";
import { products } from "./data/products";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () : Promise<void> => {
  try {
    await prisma.category.createMany({
      data: categorys,
    });
    await prisma.product.createMany({
      data: products,
    });
  } catch (error) {
    console.log(error);
  }
};

main();
