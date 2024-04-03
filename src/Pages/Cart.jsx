import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../slice/cartSlice'

function Cart() {
  const cartArray= useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [total,setTotal]=useState(0)

const getCartTotal=()=>{
  if(cartArray.length>0){
    setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
  }else{
    setTotal(0)
  }
}

useEffect(()=>{
  getCartTotal()
},[cartArray])

const handleCart=()=>{
  dispatch(emptyCart())
  alert("your order placed....thank you for purchasing")
  navigate('/')
}



  return (
    <div style={{marginTop:'100px'}}>
      {
        cartArray.length>0?
        <div className='row mt-5'>
          <div className="col-lg-8">
   <table className='table shadow border'>
   <thead>
    <tr>
      <th>#</th>
      <th>Product</th>
      <th>Product Image</th>
      <th>Price</th>
      <th>action</th>
    </tr>
   </thead>
   <tbody>
    {
      cartArray.map((product,index)=>(
        <tr key={index}>
          <td>{index+1}</td>
          <td>{product.title}</td>
          <td><img height={'100px'} width={'100px'} src={product.thumbnail} alt="" /></td>
          <td>{product.price}</td>
          <td> <Button onClick={()=>dispatch(removeFromCart(product.id))}   className='btn btn-light'><i class="fa-solid fa-trash text-danger"></i></Button></td>
        </tr>
      ))
    }
   </tbody>
   </table>

          </div>
  
  <div className="col-lg-4">
    <div className='border mb-3 shadow rounded p-3 w-100'>
      <h1 className='text-primary'>Cart Summary</h1>
      <h4>Total Products: <span className='text-warning'>{cartArray.length}</span></h4>
      <h4>Total Price: <span className='text-success'>${total}</span> </h4>
      <div className='d-grid'>
        <button onClick={handleCart} className='btn btn-primary mt-5 rounded'>Check Out</button>
      </div>

    </div>
  </div>




        </div>:<div style={{height:'100vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
        <img src="https://www.gospeedy.co.in/images/empty.gif" alt="" />
        <h3 className='text-danger text-center'>Cart is Empty</h3>
        <Link style={{textDecoration:'none'}} className='btn btn-warning rounded' to={'/'}>Back to Home</Link>

      </div>

      }

    </div>
  )
}

export default Cart