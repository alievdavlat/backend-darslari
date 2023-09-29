import  resolvers  from "./subcategories.resolvers.js";

import {readFileSync} from 'fs'
import {resolve} from 'path';


const schema = readFileSync(resolve('src', 'modules',  'subCategories/subcategories.schema.gql'), 'utf-8')

export default {
  resolvers,
  typeDefs:schema,
}
