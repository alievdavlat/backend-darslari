import React from 'react'
import { Button, Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap'
const CardImage = ({author, title, price, id, deleteCard}) => {
  return (
    <div className='container'>
        <Card inverse>
    <CardImg
      alt="Card image cap"
      src={`https://picsum.photos/id/${id * Math.floor(Math.random() * 30 )}/1200/400`}
      style={{
        height: 400
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5" style={{color:'white'}}>
        {title}
      </CardTitle>
      <CardText style={{color:'white'}}>
        {price} -  so'm 
      </CardText>
      <CardText>
        <small  style={{color:'white'}}>
          {author}
        </small>
      </CardText>
    </CardImgOverlay>
    
  </Card>
  <button className='btn btn-danger' style={{cursor:"pointer"}} onClick={() => deleteCard(id)}>
      delete
    </button>
    </div>
  )
}

export default CardImage