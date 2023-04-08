import NewMovieSchema from "@/lib/joi_schema/NewMovie";
import { PrismaClient } from "@prisma/client";
import multer from "multer";
import { writeFile } from "fs/promises";

const prisma = new PrismaClient();

export default async function (req, res) {
	await new Promise((resolve) => {
		const mw = multer().any();

		mw(req, res, resolve);
	});
	const { name, tags, description, released, genres, videoid } = req.body;
	let isValid = NewMovieSchema.validate({
		name,
		tags: tags.split(","),
		description,
		released,
		genres: genres.split(","),
		videoid,
	});
	if (isValid.error)
		return res.status(202).send({
			success: false,
			message: isValid.error.details[0].message,
			field: isValid.error.details[0].context.key,
		});
	const file = req.files[0];
	console.log(file.originalname.split("."));
	const image_path = `./public/uploads/${name.replace(
		" ",
		"_"
	)}.${file.originalname.split(".").pop()}`;

	await writeFile(image_path, file.buffer);
	const data = { ...isValid.value, image: image_path };
	const newMovie = await prisma.movie.create({ data: data });
	res.send({ error: "false", data: newMovie, file: req.files });
}

export const config = {
	api: {
		bodyParser: false,
	},
};
