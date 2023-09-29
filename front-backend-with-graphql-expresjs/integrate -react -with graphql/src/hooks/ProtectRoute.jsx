import { Outlet, Navigate } from "react-router-dom"


const PrivateRoute = () => {
    let auth = JSON.parse(window.localStorage.getItem('access_token')) 
    return(
     auth ? <Outlet/> : <Navigate to='/login' replace />
    )
  }

  export default PrivateRoute