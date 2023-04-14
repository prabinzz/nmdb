const Joi = require("joi");

const NewMovieSchema = Joi.object({
	name: Joi.string().required().messages({
		"string.empty": "Name is required",
	}),
	tags: Joi.array().items(Joi.string().required()).optional().messages({
		"array.includesRequiredUnknowns": "At least one tag is required",
	}),
	description: Joi.string().required().messages({
		"string.empty": "Description is required",
	}),
	released: Joi.date().messages({
		"date.base": "Release date should be a valid date",
	}),
	genres: Joi.array().items(Joi.string().required()).optional().messages({
		"array.includesRequiredUnknowns": "At least one genre is required",
	}),
	videoid: Joi.string().required().messages({
		"string.empty": "Video ID is required",
	}),
});

module.exports = NewMovieSchema;
