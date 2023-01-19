import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  const categorys = await prisma.category.findMany({
      include: {
        products: true
    }
  });

  res.status(200).json(categorys);
}
