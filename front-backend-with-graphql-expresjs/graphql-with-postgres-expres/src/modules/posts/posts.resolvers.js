import { GraphQLError } from "graphql"
import  {posts, newPost} from "../posts/model.js"
import { verify} from '../../utils/jwt.js'
export default {

Query : {
posts : async (_ ,{} , {token}) => {
  try {

    if (!token) {
      return new GraphQLError('values required' , {
        extensions: {
          code: "BAD_USER_INPUT",
          http:{status:400}
        }
      })
    }

    const id = verify(token)

    return await posts(id)

  } catch (err) {
    return new GraphQLError('server error' , {
      extensions: {
        code: "OPERATION_RESOLUTION_FAILURE",
        http:{status:400}
      }
    })
  }
},

},

Mutation :{
  newPost: async (_ , {} , token) => {
    try {
      
    } catch (err) {
      return new GraphQLError('server error' , {
        extensions: {
          code: "OPERATION_RESOLUTION_FAILURE",
          http:{status:400}
        }
      })
    }
  }
}

}