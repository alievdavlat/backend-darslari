
import {getOneSubCategory, getSubCategories, createSubCategory, updateSubCategory, deleteSubCategory} from './model.js'

export default {

  Query: {
    subcategories : async(_ ,{id}) => await getSubCategories(id) 
  },

  Mutation: {

  },

  Subcategories : {
    id: global => global.subcategory_id,
    title: global => global.subcategory_title,
    created_at: global => global.created_at,
    category_id : global => global.category_id,
  }

  
}