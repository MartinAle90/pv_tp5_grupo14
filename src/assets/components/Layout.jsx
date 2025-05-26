import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Navbar expand='lg' className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>TP 5 - Prog. Visual</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Inicio</Nav.Link> 
                            <Nav.Link href="/alumnos">Lista de Alumnos</Nav.Link>
                            <Nav.Link href="/alumno/nuevo">Nuevo Alumno</Nav.Link>
                            <Nav.Link href="/nosotros">Acerca de</Nav.Link> 

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section>
                <Outlet />
            </section>
        </>
    );
}

export default Layout;