// import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function (req, res) {
	console.log(req.query);
	if (req.query.id) {
		if (req.query.id == "") return res.status(201).send([]);
		const movies = await prisma.movie.findMany({
			where: { id: req.query.id },
		});
		return res.send(movies);
	} else if (req.query.name) {
		const movies = await prisma.movie.findMany({
			where: { name: { contains: req.query.name, mode: "insensitive" } },
		});
		return res.send(movies);
	} else if (req.query.catagory) {
		const movies = await prisma.movie.findMany({
			where: { tags: { hasSome: req.query.catagory } },
		});
		console.log(movies);
		return res.send(movies);
	} else {
		const movies = await prisma.movie.findMany();
		res.send(movies);
	}
}
