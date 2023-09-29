
import joi  from 'joi'


export const ClubsValidation = joi.object().keys({
  name: joi.string().required().max(70)
  
})