import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/Home.css"; // Importa el archivo CSS para estilos personalizados

function Home() {
    return (
        <Container className="home-container">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="home-card">
                        <Card.Body>
                            <h1 className="home-title">Bienvenido al Sistema de Gestión de Alumnos</h1>
                            <p className="home-lead">
                                Esta aplicación te permite gestionar la información de los alumnos de manera sencilla y eficiente.
                            </p>
                            <ul className="home-list">
                                <li>Visualiza la lista de alumnos</li>
                                <li>Agrega, edita y elimina alumnos</li>
                                <li>Consulta los detalles de cada alumno</li>
                                <li>Accede a información sobre los creadores de la app</li>
                            </ul>
                            <p className="home-footer">
                                Usa el menú de navegación para comenzar.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;