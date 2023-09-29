
import { readFileSync } from 'fs'
import { resolve } from 'path'


import resolvers from './cars.resolvers.js'

const  schema = readFileSync(resolve('src', 'graphql', 'cars/cars.schema.gql'), 'utf-8')


export default {
  resolvers,
  typeDefs: schema
}

