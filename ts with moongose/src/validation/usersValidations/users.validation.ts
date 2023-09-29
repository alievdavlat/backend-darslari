

import joi from 'joi'


export const userPostFilter = joi.object().keys({
  name: joi.string().required().max(100),
  password: joi.string().required().max(64),
  status:joi.number().required().valid(1, 2)
})


export const  usersPutFilter = joi.object().keys({
  name: joi.string().max(100),
  password: joi.string().max(64),
  status:joi.number().valid(1, 2)
})

export const paramsFilter = joi.object().keys({
  id:joi.string().required()
})

export const paramsFilterUUID = joi.object().keys({
  id:joi.string().uuid({
    version: 'uuidv4'
  }).required()
})