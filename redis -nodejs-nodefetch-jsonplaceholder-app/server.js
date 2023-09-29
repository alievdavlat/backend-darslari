import express from 'express';
import { createClient }  from 'redis'




const app = express();

const redisClient = createClient()

redisClient.on('connect', () => {
  console.log('Redis bog\'landi');
});

app.get('/comments', async (req , res, next ) => {
  
   const comments  = await fetch('https://jsonplaceholder.typicode.com/comments')

   
   res.json(await comments.json())

  })

app.listen(9090, console.log(9090))


