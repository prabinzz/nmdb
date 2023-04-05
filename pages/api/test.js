import NewMovieSchema from "@/lib/joi_schema/NewMovie";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function (req, res) {
	const isValid = NewMovieSchema.validate(req.body);
	console.log(req.body);
	if (isValid.error)
		return res.status(202).send({
			success: false,
			message: isValid.error.details[0].message,
			field: isValid.error.details[0].context.key,
		});
	const newMovie = await prisma.movie.create({ data: isValid.value });
	res.send({ error: "false", data: newMovie });
}
