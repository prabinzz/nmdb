import prisma from "@/lib/prisma";
export default async function (req, res) {
	console.log(req.query);
	if (req.query.name) {
		console.log("test");
		const movies = await prisma.movie.findMany({
			where: { name: { contains: "p*", mode: "insensitive" } },
		});
		res.send(movies);
	} else {
		const movies = await prisma.movie.findMany();
		res.send(movies);
	}
}
