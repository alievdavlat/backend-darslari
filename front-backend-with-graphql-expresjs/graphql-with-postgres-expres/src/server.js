import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';


import cors from 'cors';
import bodyParser from 'body-parser';
import  'dotenv/config'
import upload from './utils/multer.js'


import schema from './modules/index.js'







const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  schema,
  csrfPrevention:false,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.get('/', (req , res) => {
  res.send(
  `<h1 style="color:black;">by default express js click for redirect to graphql 👇</h1> 
  <br/>
  <b> <a href="http://localhost:5000/graphql" target="_blank">redirect to graphql</a> </b>
  `
  )
}) 

app.post('/images', upload.single('img'), (req, res) => {
try {
  const { filename }  = req.file
  console.log(filename);
  res.send('ok')
} catch (err) {
  console.log(err);
}
})



app.use(express.static('public'))
app.use(
  '/',
  cors(),
  bodyParser.json(),

  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }),
);

await new Promise((resolve) => httpServer.listen({ port : process.env.PORT }, resolve));

console.log(`🚀 Server ready at http://${process.env.HOST}:${process.env.PORT}/`);