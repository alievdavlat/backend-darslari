
import { makeExecutableSchema } from "@graphql-tools/schema";

import Categories from "./categories/index.js";
import subCategories from './subCategories/index.js'
import users from "./users/index.js";



export default  makeExecutableSchema({
  typeDefs:[Categories.typeDefs, subCategories.typeDefs,users.typeDefs ],
  resolvers:[Categories.resolvers, subCategories.resolvers, users.resolvers]
})