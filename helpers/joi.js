const Joi = require('joi');

const schemaCreate = Joi.object({
  name: Joi.string()
    .required()
    .messages({
      'any.required': 'Name is required!'
    }),
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Invalid email!',
      'any.required': 'Email is required!',
    }),
  password: Joi.string()
    .min(8)
    .max(15)
    .required()
    .messages({
      'string.min': 'Password requires at least 8 characters!',
      'string.max': 'Password must be less then or equal to 15 characters!',
      'any.required': 'Password is required!',
    }),
});

const schemaLogin = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Invalid email!',
      'any.required': 'Email is required!',
    }),
  password: Joi.string()
    .min(8)
    .max(15)
    .required()
    .messages({
      'string.min': 'Password requires at least 8 characters!',
      'string.max': 'Password must be less then or equal to 15 characters!',
      'any.required': 'Password is required!',
    }),
});


module.exports = {
  schemaCreate,
  schemaLogin,
};