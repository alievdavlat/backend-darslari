import Joi from "joi"

export const courseValidations = Joi.object().keys({

  name: Joi.string().required().max(64),
  price: Joi.string().required().max(64)
})



export const studentsPostValidations = Joi.object().keys({
  username: Joi.string().required().max(100),
  password: Joi.string().required().max(100)
})


export const studentsUpdateValidations = Joi.object().keys({
  username: Joi.string().max(100),
  password: Joi.string().max(100)
})