import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  const products = await prisma.product.findMany({
    where: {
        categoryId: 1
    }
  });

  res.status(200).json(products);
}
