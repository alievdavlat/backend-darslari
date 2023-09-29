import { GraphQLError } from 'graphql'
import {newCar, allCars} from './model.js'
import { pubsub } from '../../pubsub.js'


export default {
  Query :{
    cars : async() =>  await allCars()
  },


  Mutation: {
    createCar : async (_ , {name} ) => {
        try {
            if (!name) {
              return new GraphQLError('some error' , {
                extensions: {
                  code:"BAD_USER_INPUTE",
                  http: {status: 400}
                }
              })
            }

            const createdCar  = await newCar(name)
            pubsub.publish('NEW_CAR')
            return createdCar

        } catch (err) {
          return new GraphQLError('some error' , {
            extensions: {
              code:"OPERATION_RESOLUTION_FAILURE",
              http: {status: 401}
            }
          })
        }
    }
  },

  // Subscription: {
  //  cars : {
  //   resolve:async () =>  allCars(),
  //   subscribe: () => pubsub.asyncIterator(['NEW_CAR'])
  //  }
  // }

}
