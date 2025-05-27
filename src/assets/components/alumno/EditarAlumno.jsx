import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import ConfirmacionModal from "../ConfirmacionModal";

function EditarAlumno({ alumnos, actualizarAlumno }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const alumnoId = parseInt(id);

  const alumnoExistente = alumnos.find((a) => a.id === alumnoId);
  const [alumno, setAlumno] = useState({});
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    if (!alumnoExistente) {
      navigate("/alumnos");
    } else {
      setAlumno(alumnoExistente);
    }
  }, [alumnoExistente, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAlumno({
      ...alumno,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarAlumno(alumno);
    setMostrarModal(true);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container className="my-4">
          <h2 className="text-center mb-4">Editar Alumno</h2>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>LU</Form.Label>
                <Form.Control
                  type="text"
                  name="lu"
                  value={alumno.lu || ""}
                  disabled
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={alumno.nombre || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="apellido"
                  value={alumno.apellido || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Curso</Form.Label>
                <Form.Control
                  type="text"
                  name="curso"
                  value={alumno.curso || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={alumno.email || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Domicilio</Form.Label>
                <Form.Control
                  type="text"
                  name="domicilio"
                  value={alumno.domicilio || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  name="telefono"
                  value={alumno.telefono || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="d-flex align-items-center h-100 mt-2">
                <Form.Check
                  type="checkbox"
                  label="Activo"
                  name="estado"
                  checked={alumno.estado || false}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="mt-3">
            <Button variant="success" type="submit">
              Guardar Cambios
            </Button>
          </div>
        </Container>
      </Form>

      <ConfirmacionModal
        mostrar={mostrarModal}
        onCerrar={() => {
          setMostrarModal(false);
          navigate("/alumnos");
        }}
        mensaje="Alumno actualizado correctamente."
      />
    </>
  );
}

export default EditarAlumno;
