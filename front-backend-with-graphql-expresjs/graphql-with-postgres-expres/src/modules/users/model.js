import {fetchRow, fetchData} from '../../utils/postgres.js'



const LOGIN  = `

SELECT * FROM users WHERE username = $1 AND password = $2

`

const login = (username, password) => fetchRow(LOGIN, username, password)





export { 
  login
}