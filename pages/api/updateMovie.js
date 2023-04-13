import updateMovieSchema from "@/lib/joi_schema/UpdateMovie";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function (req, res) {
	const valid = updateMovieSchema.validate(req.body);
	if (valid.error) {
		console.log(valid);
		return;
	}
	const updated_movie = await prisma.movie.update({
		where: { id: valid.value.id },
		data: valid.value,
	});
	console.log(updated_movie);
	res.send("");
}
