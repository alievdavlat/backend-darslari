import express from 'express'
import { createClient } from 'redis'
import pg from 'pg'
const { Pool } = pg

const app = express()

app.use(express.json())

const redisClient = createClient()

redisClient.on('error', err => console.log(err)).connect()

const pool = new Pool({
    connectionString: 'postgres://mjalkgwx:SwH-yYdcsjp3ZQAq22gVpVL6lJJjKp-z@suleiman.db.elephantsql.com/mjalkgwx'
})


setInterval(async() => {
    const pgUsers = await redisClient.get('pg-users')
    
    if(pgUsers) {
        const newUsers = JSON.parse(pgUsers)

        if(newUsers.length) {
            const client = await pool.connect()
            for(let i of newUsers) {
                await client.query('INSERT INTO users(name) VALUES($1)', [
                    i.name
                ])
            }
        }
        await redisClient.del('pg-users')
        await redisClient.del('users')
    }
}, 15000)

app.get('/users', async(req, res, next) => {
    const redisUsers = await redisClient.get('users')
    
    if(!redisUsers) {
        const client = await pool.connect()
        const { rows } = await client.query('SELECT * FROM users')
        await redisClient.set('users', JSON.stringify(rows))
        return res.json(rows)
    }

    res.json(JSON.parse(await redisClient.get('users')))
})

app.post('/newUser', async(req, res) => {
    const { name } = req.body
    
    const redisUsers = await redisClient.get('users')
    const pgRedisUsers = await redisClient.get('pg-users')
    
    if(!pgRedisUsers) {
        const pgUsers = []
        pgUsers.push({ name })
        await redisClient.set('pg-users', JSON.stringify(pgUsers))
    }

    if(!redisUsers) {
        const client = await pool.connect()
        const { rows } = await client.query('SELECT * FROM users')
        await redisClient.set('users', JSON.stringify(rows))
    }
    
    const allUsers = JSON.parse(redisUsers)
    
    allUsers.push({ name })
    
    if(pgRedisUsers) {
        const pgExistUsers = JSON.parse(pgRedisUsers)
        pgExistUsers.push({ name })
        await redisClient.set('pg-users', JSON.stringify(pgExistUsers))
    }

    await redisClient.set('users', JSON.stringify(allUsers))

    res.json({
        message: "Created"
    })
})

app.listen(9090, console.log(9090))