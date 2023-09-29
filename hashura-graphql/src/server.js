import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4';

import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

import express from 'express';

import http from 'http';

import cors from 'cors';

import bodyParser from 'body-parser';

import schema from './graphql/index.js';




const app = express();


const httpServer = http.createServer(app);


const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.get('/',( _ ,res) => {
res.send(`
<div style="width:'100%', height:'100%' "> 
<h1> Redirect to Appolo Query Space <a href="http://localhost:2023/graphql" target="_blank"> Apollo Query Space Here ✔️ </a> </h1>
</div>
`)
}) 

app.use(
  '/',
  cors(),
  bodyParser.json(),

  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }),
);




await new Promise((resolve) => httpServer.listen({ port: 2023 }, resolve));

console.log(`🚀 Server ready at http://localhost:2023/`);