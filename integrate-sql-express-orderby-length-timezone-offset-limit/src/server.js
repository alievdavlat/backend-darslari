const express = require('express');
const app = express();
const { Pool } = require('pg');

app.use(express.json())
const pool = new Pool({

  host: 'localhost',
  port: 5432,
  database:'n124',
  user:'postgres',
  password :'aliev2002'
})


app.get('/', async (req, res) => {
  const client = await pool.connect()
  const {rows}  = await client.query('SELECT * FROM users')

  client.release()
res.send(rows) ;
});

app.get('/users', async (req, res) => {

  const { limit , offset } = req.query

  const client = await pool.connect()
  // const {rows}  = await client.query('SELECT id , name , created_at AS date FROM users ORDER BY created_at DESC')
  const {rows}  = await client.query('SELECT id , name , created_at AS date FROM users  offset $1 limit  $2', [offset, limit])

  client.release()
res.send(rows) ;
});

// app.get('/users', async (req, res) => {
//   console.log(req.query.name);
//   const client = await pool.connect()
//   const {rows}  = await client.query('SELECT id , name , created_at AS date FROM users ORDER BY created_at DESC')

//   client.release()
// res.send(rows) ;
// });

app.get('/users/:id', async (req, res) => {
  const client = await pool.connect()
  const { id } = req.params

  const { rows: [ row ] } = await client.query(`SELECT * FROM users WHERE id = $1`, [id])
  
  client.release()

  if(!row) res.status(400).send('pashol nahuy bottdan')

  res.send(row) 
})


app.post('/users', async ( req , res ) => {
  const client = await pool.connect()
  const { name , age } = req.body
  
  const { rows } = await client.query(`INSERT INTO users ( name , age ) VALUES($1 , $2) RETURNING *`, [name, age])
  client.release()

  res.json(rows)

})

app.put('/users/:id', async ( req ,res ) => {
  const client = await pool.connect()
  const { id } = req.params
  const { name , age } = req.body

  const { rows : [oldUser] } = await client.query('SELECT * FROM users WHERE id = $1', [id])

  const { rows : [ updatedUser ]} = await client.query(`UPDATE users SET name = $1 , age = $2 WHERE id = $3 RETURNING * `, 
  [
     name || oldUser.name ,
    age || oldUser.age,
    id
  ])
  client.release()

  res.json(updatedUser)

})

app.delete('/users/:id', async( req , res ) => {
const { id } = req.params
const client = await pool.connect()

const { rows : [ removedUser ] } = await client.query('DELETE FROM users WHERE id = $1 RETURNING *', [id])
client.release()
res.json(removedUser)
})


app.get('/jobs', async ( _ , res) => {
    const client = await pool.connect()

    const { rows } = await client.query(`
      SELECT
          je.job_id,
          jobs.title,
          json_agg(
              json_build_object(
                'id', e.id,
                'name', e.name
              )
          ) AS empolyers
          
      FROM
          job_employers je
      INNER JOIN 
          jobs
      ON
          jobs.id = je.job_id
      LEFT JOIN
          employers e
      ON
          je.employer_id = e.id
      GROUP BY
          je.job_id,
          jobs.title
    `)
    client.release()

    res.json(rows)
})


app.listen(8000, () => {
  console.log(' server listening on port 8000!');
});

