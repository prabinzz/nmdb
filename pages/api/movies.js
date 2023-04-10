import prisma from "@/lib/prisma";
export default async function (req, res) {
	if (req.query.id) {
		if (req.query.id == "") return res.status(201).send([]);
		const movies = await prisma.movie.findMany({
			where: { id: req.query.id },
		});
		return res.send(movies);
	}
	if (req.query.name) {
		const movies = await prisma.movie.findMany({
			where: { name: { contains: "p*", mode: "insensitive" } },
		});
		return res.send(movies);
	} else {
		const movies = await prisma.movie.findMany();
		res.send(movies);
	}
}
