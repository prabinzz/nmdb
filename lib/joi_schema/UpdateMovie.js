const Joi = require("joi");

const updateMovieSchema = Joi.object({
	id: Joi.string().required(),
	data: {
		name: Joi.string().optional().messages({
			"string.empty": "Name is empty",
		}),
		tags: Joi.array().items(Joi.string().required()).optional().messages({
			"array.includesRequiredUnknowns": "Tags is empty",
		}),
		description: Joi.string().required(),
		released: Joi.date(),
		genres: Joi.array().items(Joi.string().required()).optional().messages({
			"array.includesRequiredUnknowns": "Generes is empty",
		}),
		videoid: Joi.string().optional(),
		likes: Joi.number().optional(),
		views: Joi.number().optional(),
		image: Joi.string().optional(),
	},
});

module.exports = updateMovieSchema;
