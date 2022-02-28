import React, { useState }  from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import './styles.css';


const hStyle = { color: 'white' };








const NavBar = () => {
    return (
        <Navbar  bg="dark" expand="lg">
  <Container fluid >
  <img src="https://gongoshop.com/modules/roy_customizer/upload/logo-trans-1.png" alt="GongoShop"></img>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px'  } }
        navbarScroll
      
      >
        <Nav.Link style={hStyle}  href="#home">Inicio</Nav.Link>
        <NavDropdown  title="Catalogo" id="navbarScrollingDropdown" style={hStyle}>
          <NavDropdown.Item href="#jeans">Jeans</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#remeras">Remeras</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#pantalones">Pantalones</NavDropdown.Item>

        </NavDropdown>
        <Nav.Link style={hStyle} href="#contacto">
          Contacto
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
        name = "busqueda"
          type="search"
          placeholder="Ingresa su busqueda"
          className="me-2"
          aria-label="Search"
        />
        <Button onChange={Busqueda} value={Form.busqueda} variant="outline-success">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
export default NavBar



const initialForm = {
  busqueda:""
};
const Busqueda = ({handleSearch}) => {
  const [Form, setForm] = useState(initialForm);
  const handleSubmit = (e =>{
    e.preventDefault();
    if(!Form.busqueda){
      alert('Datos incompletos')
      return;
    } else{
      handleSearch(Form);
      setForm(initialForm);
    }
  
  })
}
