import React from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

const Login = () => {
  const navigate = useNavigate()

  const [ inpVal , setInpVal ] = React.useState({username:"", password:""})

  const [fn, { data, loading, error }] = useMutation(LOGIN, {
    update: (cache , data) => {
      if (data?.data?.login?.token) {
        navigate('/')
        const { token } = data?.data?.login
        if(token) window.localStorage.setItem('access_token', JSON.stringify(token))
      }
    }
  });

  React.useEffect(() => {
    if (JSON.parse(window.localStorage.getItem('access_token'))) {
      return navigate('/')
    }
  }, [])

  const handleSubmit = (e) => {
      e.preventDefault()
      fn({
        variables:{
          username:inpVal.username,
          password:inpVal.password
        }
      })

      setInpVal({username:"", password:""})
      // if (data?.login?.token) {

      //   navigate('/')
      //   const { token } = data?.login
      //   if(token) window.localStorage.setItem('access_token', JSON.stringify(token))
      // }
  }

  const changeHandler = (e) => {
    setInpVal({...inpVal,[e.target.name]: e.target.value})
  }

  if(loading) <>loading...</>
  if(error) <>{console.log(error)}</>


  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "15px",
          border: "1px solid black",
          padding: "30px",
          borderRadius: "15px",
          width: "450px",
          height: "400px",
        }}>

        <h1>Login</h1>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            flexDirection: "column",
            gap: "15px",
          }}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            style={{ padding: "13px" }}
            value={inpVal.username}
            onChange={(e) => changeHandler(e)}
          />
        </div>


        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-start",
            flexDirection: "column",
            gap: "15px",
          }}>
          <label htmlFor="password">password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="password"
            style={{ padding: "13px" }}
            value={inpVal.password}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div>
          <button  style={{cursor:'pointer', margin:'14px', padding:'10px 20px', borderRadius:"10px", border:"none", color:'white', background:'blue'}}>submit</button>
        </div>

      </form>
    </div>
  );
};

export default Login;
