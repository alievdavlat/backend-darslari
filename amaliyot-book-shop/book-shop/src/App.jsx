import React from 'react'
import CardImage from './components/Card'

const inpvalues = {
title:'',
price:'',
author:''
}


const App = () => {


  const [data , setData] = React.useState([])
  const [value, setvalue] = React.useState(inpvalues)
  const submitPost = (e) => {
    e.preventDefault()
    console.log(value);

    fetch('http://localhost:4000/', {
      method:"POST",
      headers:{"Content-Type" : "application/json", "Accept" : "application/json"},
      mode:"no-cors",
      body:JSON.stringify({...value})
    })

    setvalue(inpvalues)
  }

  const deleteCard = (id) => {
    fetch('http://localhost:4000', {
      method:"DELETE",
      body:JSON.stringify({id})
    })
  }

  React.useEffect(() => {
    fetch('http://localhost:4000')
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
}, [])





  const getValues = (e) => {
      setvalue(p => ({...p, [e.target.name]:e.target.value}))
  }

  return (
   <>
    <form className='container bg-dark d-flex gap-5 flex-column p-5' onSubmit={e => submitPost(e)}>
      <div className='d-flex gap-3 flex-column'>
        <label htmlFor="title" style={{color:'white',fontSize:'18px', textTransform:"capitalize"}} >title</label>
        <input type="text" value={value.title} onChange={getValues} placeholder='title' className='form-control' name='title' id='title' />
      </div>
      <div className='d-flex gap-3 flex-column'>
        <label htmlFor="title" style={{color:'white',fontSize:'18px', textTransform:"capitalize"}} >price</label>
        <input type="text" value={value.price} onChange={getValues} placeholder='price' className='form-control' name='price' id='price' />
      </div>
      <div className='d-flex gap-3 flex-column'>
        <label htmlFor="title" style={{color:'white',fontSize:'18px', textTransform:"capitalize"}} >author</label>
        <input type="text" value={value.author} onChange={getValues} placeholder='author'className='form-control'  name='author' id='author' />
      </div>
      <div className='w-100 d-flex align-items-center justify-content-center'>
      <button className='btn btn-success w-25 p-2 fw-bold fs-4'>send</button>
      </div>
    </form>

    <div style={{display:"flex",gap:"20px", alignItems:"center", flexWrap:"wrap", padding:"200px"}}>
      {
        data.map(item => <CardImage deleteCard={deleteCard} key={item.id} {...item} />)
      }
    </div>
   </>
  )
}

export default App