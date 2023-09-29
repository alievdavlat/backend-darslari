import { makeExecutableSchema } from "@graphql-tools/schema";

import users from './users/index.js'
import posts from './posts/index.js'

export default makeExecutableSchema({
	typeDefs: [users.typeDefs, posts.typeDefs],
	resolvers: [users.resolvers, posts.resolvers]
})
