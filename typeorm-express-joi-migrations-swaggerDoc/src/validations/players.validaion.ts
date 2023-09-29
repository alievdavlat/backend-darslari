
import joi  from 'joi'


export const PlayersValidation = joi.object().keys({
  name: joi.string().required().max(70),
  club: joi.string().required()
})



export const PlayersValidationPUT = joi.object().keys({
  name: joi.string(),
  club: joi.string()

})

export const PlayersValidationPUTid = joi.object().keys({
  id:joi.string().uuid({
    version: 'uuidv4'
  }).required()
})