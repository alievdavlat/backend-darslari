import { GraphQLError } from "graphql"
import {sign} from '../../utils/jwt.js'
import { login } from './model.js'





export default {
  Query : {
    users : () => []
  },

  Mutation: {
    login : async (_ , {username , password}) => {
       try {

          if (!username || !password) {
            return new GraphQLError('values reqired', {
              extensions: {
                code : 'BAD_USER_INPUT',
                http: {status: 400}
              }
            })
          }

          const checkUser = await login(username, password)

          if (!checkUser) {
            return new GraphQLError('user not found', {
              extensions: {
                code : 'BAD_REQUEST',
                http: {status: 400}
              }
            })
          }

          return {
            msg :'users successfuly logged in',
            data: checkUser,
            token: sign({id: checkUser.id})
          }

       } catch (err) {
         return new GraphQLError('some error', {
              extensions: {
                code : 'OPERATION_RESOLUTION_FAILURE',
                http: {status: 401}
              }
            })
       }

    }
  }

  
}