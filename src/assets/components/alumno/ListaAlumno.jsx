import { useState } from "react";
import { Button, Card, Col, Container, Row, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ListaAlumnos({ alumnos, setAlumnos }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

  const confirmarEliminar = (alumno) => {
    setAlumnoSeleccionado(alumno);
    setShowModal(true);
  };

  const handleConfirmar = () => {
    if (alumnoSeleccionado) {
      const nuevaLista = alumnos.filter((alumno) => alumno.id !== alumnoSeleccionado.id);
      setAlumnos(nuevaLista);
      localStorage.setItem("alumnos", JSON.stringify(nuevaLista));
    }
    setShowModal(false);
    setAlumnoSeleccionado(null);
  };

  return (
    <Container className="my-4 text-center">
      <h2 className="mb-4">Lista de Alumnos</h2>
      <Row>
        {alumnos.map((alumno) => (
          <Col md={4} key={alumno.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>
                  {alumno.nombre} {alumno.apellido}
                </Card.Title>
                <Card.Text>
                  <strong>LU:</strong> {alumno.lu}
                  <br />
                  <strong>Estado:</strong>{" "}
                  {alumno.estado ? "Activo" : "Inactivo"}
                </Card.Text>
                <Button
                  variant="primary"
                  className="me-2 my-2"
                  onClick={() => navigate(`/alumnos/${alumno.id}/editar`)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  className="me-2 my-2"
                  onClick={() => confirmarEliminar(alumno)}
                >
                  Eliminar
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => navigate(`/alumnos/${alumno.id}`)}
                >
                  Ver Detalles
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que querés eliminar a{" "}
          <strong>
            {alumnoSeleccionado?.nombre} {alumnoSeleccionado?.apellido}
          </strong>{" "}
          con ID: <strong>{alumnoSeleccionado?.id}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleConfirmar}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ListaAlumnos;
