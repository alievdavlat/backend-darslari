import React from 'react'
import socketIo from 'socket.io-client'


const URL = 'http://localhost:8080/'

const App = () => {
  const [ name , setName ] = React.useState('')
  const [ joinedUser , setJoinedUser ] = React.useState('')
  const [ allusers , setAllusers ] = React.useState([])
  const io = React.useRef()

  io.current = socketIo(URL, {
    transports: ['websocket']
  })

  const  handleName = () => {
    io.current.emit('new-user', name)

  }

  React.useEffect(() => {
    io.current.on('user-joined', data => {
      setJoinedUser(data)
    })
  }, [])

  React.useEffect(() => {
    io.current.on('all-users', data => {
      setAllusers(data);
    })
  }, [])




  return (
    <>

   {
   !joinedUser ?  <div className='w-75 container d-flex align-items-center justify-content-center flex-column gap-5'>
     <input type="text" placeholder='enter name' onInput={ e  => setName(e.target.value) } className='form-control'/>
     <button className='btn btn-info' onClick={() => handleName()}>
       submit
     </button>
     </div> 
     : <h1>Chat app</h1>
   }

   {
    joinedUser &&  <ul className='p-5'>
    
      {
        allusers.map( item => <li key={item.id}>{item.name !== joinedUser ? item.name : 'you '}</li> )
      }
    </ul>
   }
    </>
  )
}

export default App