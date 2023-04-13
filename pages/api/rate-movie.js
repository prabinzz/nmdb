// import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";
import { data } from "autoprefixer";

const prisma = new PrismaClient();
export default async function handler(req, res) {
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
