import React from "react"
import Blog from "./myblog"
import "./App.css"
import { Navbar,Nav,FormControl,Form,Button,NavDropdown } from 'react-bootstrap';



function App() {
    return (
   
      <div className="my-blog">

<Navbar bg="light" expand="lg">
<Navbar.Brand href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
     
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Contact Us</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Inventory</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>


        <Blog
        title="Man must explore, and this is exploration at its greatest"
        subTitle="Problems look mighty small from 150 miles up"
        author="Start Bootstrap"
        date="September 24, 2019"
        />
        <Blog
        title="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine."
        subTitle=""
        author="Start Bootstrap"
        date="September 18, 2019"
        />
        <Blog
         title="Science has not yet mastered prophecy"
         subTitle="We predict too much for the next year and yet far too little for the next ten."
         author="Start Bootstrap"
         date="August 24, 2019"
        />

        <Blog
        title="Failure is not an option"
        subTitle="Many say exploration is part of our destiny, but it’s actually our duty to future generations."
        author="Start Bootstrap"
        date="July 8, 2019"
        />
        <hr/>
        <br>
        </br>
    <footer>
      To subscribe please send an email
    </footer>
    </div>
    )
}


export default App