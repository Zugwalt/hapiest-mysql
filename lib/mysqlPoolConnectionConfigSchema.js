'use strict';

const Joi = require('joi');

module.exports = {
    host: Joi.string().hostname().required(),
    port: Joi.number().integer().optional(),
    database: Joi.string().required(),
    user: Joi.string().max(32).required(),
    password: Joi.string().required(),
    connectionLimit: Joi.number().integer().required()
};