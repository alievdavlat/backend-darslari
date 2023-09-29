import pg from 'pg'


const pool = new pg.Pool({
  connectionString:'postgres://postgres:aliev2002@localhost:5432/n124'
})



const fetchRow = async (SQL , ...params) => {
   
    const client = await pool.connect()
  try {
      const { rows : [ row ]} = await client.query(SQL, params.length ? params : null)
      return row
    } finally{
      client.release()
    }
}


const fetchData = async (SQL , ...params) => {
   
  const client = await pool.connect()
try {
    const { rows } = await client.query(SQL, params.length ? params : null)
    return rows
  } finally{
    client.release()
  }
}


export {
  fetchData, fetchRow
}

