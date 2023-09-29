import {fetchRow, fetchData} from '../../utils/postgres.js'




const POST = `
SELECT * FROM posts WHERE user_id = $1

`

const posts = (id) => fetchData(POST, id)



const NEW_POST = `
INSERT INTO posts (title, user_id) VALUES($1 , $2) RETURNING *
`

const newPost = (title, user_id) => fetchRow(NEW_POST, title, user_id)




export { 
  posts,
  newPost
}