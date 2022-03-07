import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Navbare = () => {
  return (
    <div>
       <Navbar style={{width:"345px"}} bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Welcome Evrey One</Navbar.Brand>
    {/* <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav> */}
    </Container>
  </Navbar>
    </div>
  )
}

export default Navbare