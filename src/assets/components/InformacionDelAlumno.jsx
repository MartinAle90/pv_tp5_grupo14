import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, ListGroup, Card, Col, Table, Row } from "react-bootstrap";

function InformacionDeAlumno({alumnos}) {
  const { id } = useParams(); // agarra el id
  const alumnoId = parseInt(id);
  
    const navigate = useNavigate();

  // Busca el alumno que tiene ese id 
  const alumno = alumnos.find((a) => a.id === Number(id));

  if (!alumno) {
    return <p>Alumno no encontrado</p>;
  }

  return (
 <Container className="my-4 text-center">
  <Card>
    <Card.Header as="h4">Información del Alumno</Card.Header>
    <Card.Body className="text-start">
      <Row className="mb-3 align-center">
        <Col md={4}>
          <strong>ID:</strong> {alumno.id}
        </Col>
        <Col md={4}>
          <strong>LU:</strong> {alumno.lu}
        </Col>
        <Col md={4}>
          <strong>Nombre:</strong> {alumno.nombre}
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={4}>
          <strong>Apellido:</strong> {alumno.apellido}
        </Col>
        <Col md={4}>
          <strong>Curso:</strong> {alumno.curso}
        </Col>
        <Col md={4}>
          <strong>Email:</strong> {alumno.email}
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={4}>
          <strong>Domicilio:</strong> {alumno.domicilio}
        </Col>
        <Col md={4}>
          <strong>Teléfono:</strong> {alumno.telefono}
        </Col>
        <Col md={4}>
          <strong>Estado:</strong> {alumno.estado ? "Activo" : "Inactivo"}
        </Col>
      </Row>
    </Card.Body>
  </Card>

  <Button className="mt-3" variant="secondary" onClick={() => navigate("/alumnos")}>
    Volver a la lista
  </Button>
</Container>





  );
}

export default InformacionDeAlumno;
