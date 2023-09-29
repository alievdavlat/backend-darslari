import React from 'react'

const Login = () => {

  const values = {
    name:'',
    password:''
  }

  

  const [ inpValue , setInpValue ] = React.useState(values)
  const handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:8000/login', {
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(inpValue)
    })
    .then( response => response.json)
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  const change = (e) => {
    setInpValue(() => ({...inpValue, [e.target.name]: e.target.value}))
  }

  return (
   <>
<h1>Login</h1>

<form onSubmit={e => handleSubmit(e)}>

    <div> 
      <label htmlFor="name">username</label>
      <input type="text" value={inpValue.name} onChange={e => change(e)} name='name' placeholder='username...'/>
    </div>

    <div>
      <label htmlFor="password">password</label>
      <input type="text" value={inpValue.password}  onChange={e => change(e)} name='password' placeholder='password...'/>
    </div>

   <button>submit</button>

</form>
   </>
  ) 
}

export default Login