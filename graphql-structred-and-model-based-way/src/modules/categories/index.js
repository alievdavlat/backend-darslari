
import {readFileSync} from 'fs'
import {resolve} from 'path';


import  resolvers  from "./categories.resolvers.js";

const schema = readFileSync(resolve('src', 'modules',  'categories/catigories.schema.gql'), 'utf-8')

export default {
  resolvers,
  typeDefs:schema,
}
