// import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(req, res) {
	if (req.method == "POST") {
		const { movieId, userEmail, rating } = req.body;
		const user = await prisma.user.findFirst({
			where: {
				email: userEmail,
			},
		});
		const alreadyRated = await prisma.rating.findFirst({
			where: {
				movieId: movieId,
				userId: user.id,
			},
		});
		if (alreadyRated) {
			const updatedRating = await prisma.rating.update({
				where: {
					id: alreadyRated.id,
				},
				data: {
					rating: rating,
				},
			});
			return res.send({ error: false, data: updatedRating });
		}

		const newRating = await prisma.rating.create({
			data: {
				userId: user.id,
				movieId: movieId,
				rating: rating,
			},
		});
		res.send({ error: false, data: newRating });
	}

	if (req.method == "GET") {
		if (req.query.movieId && !req.query.userId) {
			const votes = await prisma.rating.aggregate({
				where: {
					movieId: req.body.movieId,
				},
				_avg: {
					rating: true,
				},
				_count: {
					rating: true,
				},
			});
			res.send(votes);
		}
	}
}
