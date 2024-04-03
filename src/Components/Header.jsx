import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const whishlist= useSelector((state)=>state.whishlistReducer)
  const cart =useSelector((state)=>state.cartReducer)
  return (
    <>
         <Navbar expand="lg" className="bg-info top-0 position-fixed w-100 " style={{zIndex:1}}>
      <Container >
        <Navbar.Brand  ><Link to={'/'} style={{color:"white",fontSize:'30px',fontWeight:'bolder',textDecoration:'none'}}><i class="fa-solid fa-truck-fast fa-bounce"></i> E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">

            <Nav.Link ><Link to={'/whishlist'}  style={{color:"white",fontSize:'20px',textDecoration:'none'}}>WhishList <i class="fa-solid fa-heart text-danger"></i>  
            <Badge className="bg-primary rounded ms-2">{whishlist.length}</Badge></Link></Nav.Link>

            <Nav.Link ><Link to={'/cart'}  style={{color:"white",fontSize:'20px',textDecoration:'none'}}>Cart <i class="fa-solid fa-cart-plus text-success"></i>
            <Badge className="bg-primary rounded ms-2">{cart.length}</Badge></Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header