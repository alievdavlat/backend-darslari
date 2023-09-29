import { sign } from "../utils/JWT.js"  


export const LOGIN = ( req , res ) => {
  const { userId , role } = req
  const token = sign({userId, role })
  if(role == 'admin'){
    res.cookie('token',token)
    res.redirect('/admin')
    return
  }
  if(role == 'user'){
    res.cookie('token',token)
    res.redirect('/users')
    return
  }

  res.redirect('/login')
}


export const AUTH = ( _, res ) => {
  res.render('login.view.ejs')
}