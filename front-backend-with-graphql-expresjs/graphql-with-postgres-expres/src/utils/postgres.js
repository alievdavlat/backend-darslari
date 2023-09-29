import pg from 'pg'


const pool = new pg.Pool({
  connectionString: process.env.CONNECTION_STRING
})



const fetchData = async (SQL, ...params) => {
  const client = await pool.connect()

  try {
    const { rows } = await client.query(SQL, params.length ? params : null )
    
    return rows

  } catch (error) {
     console.log(error);
  } finally {
    client.release()
  }

}






 const fetchRow = async (SQL, ...params) => {
  const client = await pool.connect()

  try {
    const { rows : [ row ] } = await client.query(SQL, params.length ? params : null )
    
    return row

  } catch (error) {
      console.log(error);
  } finally {
    client.release()
  }

}


export { 
  fetchData, 
  fetchRow
}
