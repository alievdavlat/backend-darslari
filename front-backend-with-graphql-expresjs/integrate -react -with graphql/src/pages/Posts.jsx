import React from 'react'
import {useQuery, gql} from '@apollo/client'



const POSTS = gql`
query posts {
  posts {
    id
    title
  
  }
}
`


const Posts = () => {

  const { data , loading , error } = useQuery(POSTS)
  console.log(data);

  return (
    <>
      <div style={{width:"100%", display:'flex',alignItems:'center', justifyContent:'center', padding:'20px'}}>
      <h1 style={{marginLeft:'30px'}}>Posts</h1>
      </div>
  
    <div style={{display: 'flex', alignItems:'center', padding:'20px'}}>
      <div style={{border: '1px solid black', borderRadius:'15px', width:'100%', padding:'25px'}}>
      {
        data?.posts.map((item , idx) => <h1 key={item.id}> {item.title}<span>  {item.id} </span></h1> )
      }
      </div>
    </div>
    </>
  )
}

export default Posts