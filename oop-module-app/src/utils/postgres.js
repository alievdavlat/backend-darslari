const { Pool } = require('pg')


const pool = new Pool({
  connectionString:'postgres://postgres:aliev2002@localhost:5432/n124'
})

class PG {
  #pool = pool

  async fetchData(SQL , ...params) {
    const client = await this.#pool.connect()
    try {

      const  { rows } = await client.query(SQL, params.length ? params : null)
      return rows

    } finally {
      client.release()
    }
  }
}


module.exports = new PG()