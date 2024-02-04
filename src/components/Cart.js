import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export default function Cart() {
  const dispatch = useDispatch();

  const getitems = useSelector((x)=>{
    return x.cart.items;
  })

  const increaseitemcount = (item) => {
    // console.log(item);
    dispatch({type : 'CHNG_COUNT', payload : 1});
    const newObj = Object.assign({}, item);
    dispatch({type : 'ADD_ITEM', payload : newObj});
  }

  const decreaseitemcount = (item) => {
    // console.log(item);
    const newObj = Object.assign({}, item);
    dispatch({type : 'SUB_ITEM', payload : newObj});
  }

  const removeitem = (item) => {
    // console.log(item);
    const newObj = Object.assign({}, item);
    dispatch({type : 'REMOVE_ITEM', payload : newObj});
  }


  return (
    <>
    <h2>
      Cart Items
    </h2>
    {getitems.length == 0 ? <h2>You do not have any item in your cart !!!</h2>
    :
    getitems.map((x)=>
    <div style={{display: "flex", margin: "2%"}}>
      <div style={{width: "20%"}}>
      <img src={x.image} style={{width: "180px", height: "180px"}} />
      </div>
      <div style={{width: "50%", textAlign: "left"}}>
        <h5>{x.title}</h5>
        <p>{x.description}</p>
        <Button variant='danger' onClick={()=> removeitem(x)}>Remove from Cart</Button>
      </div>
      <div style={{display: "flex", width: "30%"}}>
        <div style={{marginRight: "10%"}}>
        <h5>Quantity</h5>
        <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" onClick={() => decreaseitemcount(x)}>-</Button>
      <Button variant="secondary">{x.count}</Button>
      <Button variant="secondary" onClick={() => increaseitemcount(x)}>+</Button>
    </ButtonGroup>
        </div>
        <div style={{marginRight: "10%"}}>
        <h5>Unit Price</h5>
        <p>₹ {x.price}</p>
        </div>
        <div>
        <h5>Total</h5>
        <p>₹ {x.price*x.count}</p>
        </div>
      </div>
    </div>
    )
    }
    </>
  )
}
