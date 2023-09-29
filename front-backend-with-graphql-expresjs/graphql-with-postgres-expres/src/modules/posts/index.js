import { readFileSync } from 'fs'
import { resolve } from 'path'

import  resolvers from './posts.resolvers.js'

const schema = readFileSync(resolve('src', 'modules', 'posts/posts.schema.gql'), 'utf-8')


export default {
  resolvers,
  typeDefs : schema
}

