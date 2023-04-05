const Joi = require("joi");

const NewMovieSchema = Joi.object({
	name: Joi.string().required().messages({
		"string.empty": "Name is empty",
	}),
	tags: Joi.array().items(Joi.string().required()).optional().messages({
		"array.includesRequiredUnknowns": "Tags is empty",
	}),
	description: Joi.string().required(),
	released: Joi.date(),
	generes: Joi.ref("tags"),
});

module.exports = NewMovieSchema;
