
import { GraphQLError, graphql } from 'graphql'
import { getAllUserPosts, getAllUsers, login } from './model.js'
import { sign, verify } from '../../utils/jwt.js'




export default {

  Query : {
    users: async(_, {} , {token}) =>  {
      try {
        const { id } = verify(token)
        console.log(id);
        return await getAllUsers(id)
      } catch (err) {
        return  new GraphQLError('some error', {
         extensions:{
          code :'BAD_REQUEST',
          http:{status: 400}
         }
        })
      }
    },
    
  },

  Mutation: {
    login: async (_, {username , password}) => {
      try {
        if (!username || !password) {
          return new GraphQLError('values reqired', {
            extensions: {
              code:'BAD_USER_INPUT',
              http:{status: 400}
            }
          })
        }

        const user = await login(username, password)

        if (!user) {
          return new GraphQLError('user not found', {
            extensions: {
              code:'BAD_REQUEST',
              http:{status: 400}
            }
          })
        }
        const token =  sign({id: user.id , username})

        return {
            status: 200,
            data: user,
            msg: 'you succesfuly logged in',
            token
        }

      } catch (err) {
        return new GraphQLError('bad request', {
          extensions: {
            code:'BAD_REQUEST',
            http:{status: 400}
          }
        })
      }
    },

  },

  Users:{
    posts: async global => await getAllUserPosts(global.id)
  }
  
}