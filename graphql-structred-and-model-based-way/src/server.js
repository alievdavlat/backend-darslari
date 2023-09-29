import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import  schema  from './modules/index.js';








const server = new ApolloServer({
schema
});


const { url } = await startStandaloneServer(server, {
  listen: { port: 7000 },
  context: async ({ req, res }) => {
    return req.headers || '';

},
});

console.log(`🚀  Server ready at: ${url}`);
