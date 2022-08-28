import React, { useState } from 'react'
import { Row, Navbar, Container, Nav, Form } from 'react-bootstrap'

const NavBar = ({ fillterBySearch }) => {
  const [searchValue, setSearchValue] = useState('')
  const onSearch = () => {
    fillterBySearch(searchValue)
    setSearchValue('')
  }
  return (
    <Row>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">RealMadrid Shop</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                onChange={(ev) => setSearchValue(ev.target.value)}
                value={searchValue}
                type="text"
                placeholder="Search"
                className="mx-2"
              />
              <button onClick={() => onSearch()} className="btn-search">
                Search
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  )
}

export default NavBar
