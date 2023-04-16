import prisma from "@/lib/prisma";
export default async function handler(req, res) {
	if (req.method === "POST") {
		const { id } = req.body.data;

		console.log(req.body);
		const movie = await prisma.movie.findFirst({ where: { id: id } });
		if (movie) {
			const result = await prisma.movie.delete({
				where: {
					id: id,
				},
			});
			res.status(200).json({ message: "Movie deleted successfully!" });
		}
	} else {
		res.status(405).json({ message: "Method not allowed" });
	}
}
