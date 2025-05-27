import { useState } from "react";
import { Form, Row, Col, Button, Container, Modal } from "react-bootstrap";
import ConfirmacionModal from "../ConfirmacionModal";

function AlumnoForm({ agregarAlumno }) {
  const [lu, setLu] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [curso, setCurso] = useState("");
  const [email, setEmail] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");
  const [estado, setEstado] = useState(true);

  const [mostrarModal, setMostrarModal] = useState(false);

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    let ultimoId = parseInt(localStorage.getItem("ultimoId")) || 0;
    const nuevoId = ultimoId + 1;

    const alumno = {
      id: nuevoId,
      lu,
      nombre,
      apellido,
      curso,
      email,
      domicilio,
      telefono,
      estado,
    };

    let lista = JSON.parse(localStorage.getItem("alumnos")) || [];
    lista.push(alumno);
    localStorage.setItem("alumnos", JSON.stringify(lista));

    agregarAlumno(alumno);
    localStorage.setItem("ultimoId", nuevoId);

    setMostrarModal(true);

    setLu("");
    setNombre("");
    setApellido("");
    setCurso("");
    setEmail("");
    setDomicilio("");
    setTelefono("");
    setEstado(true);
  };

  return (
    <>
      <Form className="my-4" onSubmit={manejarEnvio}>
        <h2 className="text-center mb-4">Formulario de Alumno</h2>

        <Container>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>LU</Form.Label>
                <Form.Control
                  type="text"
                  value={lu}
                  onChange={(e) => setLu(e.target.value)}
                  placeholder="Escriba el LU"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Escriba el nombre"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  placeholder="Escriba el apellido"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Curso</Form.Label>
                <Form.Control
                  type="text"
                  value={curso}
                  onChange={(e) => setCurso(e.target.value)}
                  placeholder="Escriba el curso"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Escriba el email"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Domicilio</Form.Label>
                <Form.Control
                  type="text"
                  value={domicilio}
                  onChange={(e) => setDomicilio(e.target.value)}
                  placeholder="Escriba el domicilio"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Escriba el teléfono"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6} className="d-flex align-items-center mt-3">
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Activo"
                  checked={estado}
                  onChange={(e) => setEstado(e.target.checked)}
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="mt-3">
            <Button type="submit" variant="success">
              Guardar
            </Button>
          </div>
        </Container>
      </Form>

      <ConfirmacionModal
        mostrar={mostrarModal}
        onCerrar={() => setMostrarModal(false)}
        mensaje="Alumno guardado correctamente."
      />
    </>
  );
}

export default AlumnoForm;
