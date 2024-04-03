import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWhishlist } from '../slice/whishlist'
import { addToCart } from '../slice/cartSlice'

function Home() {
    const data = useFetch("https://dummyjson.com/products")
    // console.log(data);
    const dispatch = useDispatch()
  return (
    <Row style={{marginTop:'100px'}}>
       {  
       data?.length>0?data?.map((product,index)=>(
        <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card className='shadow rounded m-3' style={{ width: '18rem',height:'30rem' }}>
      <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
         <p>{product?.description.slice(0,50)}...</p>
         <h5>${product?.price}</h5>
        </Card.Text>
        <div className='d-flex justify-content-between'>
            <Button onClick={()=>dispatch(addToWhishlist(product))} className='btn btn-light'><i class="fa-solid fa-heart text-danger"></i></Button>
            <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-light'> <i class="fa-solid fa-cart-plus text-success"></i></Button>
        </div>

      </Card.Body>
    </Card>
        </Col>
       )):<p>Nothing to display</p>
       }
      
    </Row>
  )
}

export default Home