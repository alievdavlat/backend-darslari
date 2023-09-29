
import { makeExecutableSchema } from "@graphql-tools/schema";

import cars from './cars/index.js'



export default  makeExecutableSchema({
  typeDefs:[cars.typeDefs ],
  resolvers:[cars.resolvers]
})