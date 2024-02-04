import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';

export default function Product() {
  const [products,setProducts] = useState([])
  const dispatch = useDispatch();


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then((res)=> res.json()).then((data) => setProducts(data));
  }, [])

  const addproducttocart = (item) =>{
    dispatch({type : 'CHNG_COUNT', payload : 1});
    const newObj = Object.assign({}, item, { count: 1 });
    dispatch({type : 'ADD_ITEM', payload : newObj})
  }

  return (
    <>
    <h1>Products</h1>

    <div style={{display: 'flex', margin: "2%", flexWrap: "wrap", justifyContent: "space-between" }}>
    {products.map((item)=> 
    <Card style={{ width: '18rem', border: "2px solid black", padding: "2%", margin: "2%", borderRadius: "5px" }}>
    <Card.Body style={{height: "90%"}}>
      <Card.Title>{item.title}</Card.Title>
    <Card.Img variant="top" src={item.image} style={{width: '200px', height: "150px"}} />
      <Card.Text>
        {`Cost:- INR  ${item.price}`}
      </Card.Text>
    </Card.Body>
      <Button variant="primary" onClick={()=>addproducttocart(item)}>Add to Cart</Button>
  </Card>
    )}
    </div>
    
    </>
  )
}
