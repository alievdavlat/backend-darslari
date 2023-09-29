import fetchData, { fetchRow } from "../../utils/postgres.js"






const USER_BY_LOGIN = `

SELECT * FROM users WHERE name = $1 AND password = $2
`
 

export const login = ( name ,  password ) => fetchRow(USER_BY_LOGIN,name ,  password)

