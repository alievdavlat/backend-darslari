import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import PrivateRoute from './hooks/ProtectRoute'
import HomePage from './pages/Home'
import Login from './pages/Login'
import Posts from './pages/Posts'
import Navbar from './components/Navbar'


const App = () => {


  return (
    <>
      <Navbar/>

      <Routes>
       <Route element={<PrivateRoute/>} >

        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/posts' element={<Posts/>}/>

       </Route>
       
        <Route  path='/login' element={<Login/>}/>

      </Routes>
    </>
  )
}

export default App