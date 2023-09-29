
import { allCategories, deleteCategory, newCatgory, updateCategory } from './model.js'
import { GraphQLError } from 'graphql';
import { getOneSubCategory , getSubCategories} from '../subCategories/model.js'


export default {
  Query: {
   categories: async () => {
    try {
      return await allCategories()

    } catch (err) {

      return new GraphQLError('shiptr blee', {
        extensions: {
          code:'BAD_REQUEST',
          http: { status: 400 },
        }
      })

    }
   },
  },

  Mutation:{
    newCategory : async (_ , {title}) =>  {
      try {
        if (!title) {
            return new GraphQLError('values required', {
              extensions:{
                code: 'BADREQUEST ',
                http:{ status }
              }
            })
        }

        return newCatgory(title)
      } catch (err) {
        return new GraphQLError('FORBIDDEN', {
          extensions: {
            code: 'FORBIDDEN',
  
            http: { status: 403 },
          },
        });
      }

    },

    updateCategory : async ( _ , {id,title}) => {
      try {
        if (!title || !id) {
          return new GraphQLError('values required', {
            extensions:{
              code: 'BADREQUEST ',
              http:{ status }
            }
          })
      }


      return await updateCategory(id, title)
      } catch (err) {
         return new GraphQLError('bad request', {
          extensions: {
            code: 'BAD_REQUEST',
  
            http: { status: 404 },
          },
        });
      }
    },

    deletCategory : async (_ , {id}) => {
      try {
        if (!id) {
          return new GraphQLError('values required', {
            extensions:{
              code: 'BADREQUEST ',
              http:{ status }
            }
          })
      }
      return deleteCategory(id)
      } catch (err) {
        return new GraphQLError('bad request', {
          extensions: {
            code: 'BAD_REQUEST',
  
            http: { status: 404 },
          },
        });
      }
    }
  
  },

  Category : {
    id : global => global.category_id,
    title: global => global.category_title,
    created_at:global => global.created_at,
    subcategories: async global => await getSubCategories(global.category_id)
  }
};
