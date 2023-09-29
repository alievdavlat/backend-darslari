import { readFileSync } from 'fs'
import {resolve} from 'path'


import resolvers from './users.resolvers.js'

const schema = readFileSync(resolve('src', 'modules', 'users/users.schema.gql'), 'utf-8')


export default {
  resolvers,
  typeDefs: schema
}


