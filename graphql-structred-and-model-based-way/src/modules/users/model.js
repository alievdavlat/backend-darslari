
import { fetchData, fetchRow} from '../../utils/postgres.js'


const LOGIN = `
SELECT * FROM users  WHERE username = $1 AND password = $2
`

const login = ( username , password ) => fetchRow(LOGIN, username ,  password)


const GET_ALL_USERS = `
SELECT  u.* FROM users u  WHERE id = $1;
`
const getAllUsers = (id) => fetchData(GET_ALL_USERS, id)

const GET_ALL_USERS_POSTS = `
select * from posts where user_id = $1
`

const getAllUserPosts = (id) => fetchData(GET_ALL_USERS_POSTS , id)
export {
  login,
  getAllUsers,
  getAllUserPosts
}