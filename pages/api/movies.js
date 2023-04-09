import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function (req, res) {
	const movies = await prisma.movie.findMany();
	res.send(movies);
}
