
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function AlumnoForm() {

  const [lu, setLu] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

 
  const manejarEnvio = (evento) => {
    evento.preventDefault(); 


    const alumno = { lu, nombre, apellido };


    let lista = JSON.parse(localStorage.getItem("alumnos")) || [];
    lista.push(alumno);
    localStorage.setItem("alumnos", JSON.stringify(lista));

   
    alert("Alumno guardado correctamente");

    
    setLu("");
    setNombre("");
    setApellido("");
  };

  return (
    <Form onSubmit={manejarEnvio}>
      <h2>Formulario de Alumno</h2>

      <Form.Group className="mb-3">
        <Form.Label>LU</Form.Label>
        <Form.Control
          type="text"
          value={lu}
          onChange={(e) => setLu(e.target.value)}
          placeholder="Escribe el LU"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe el nombre"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          placeholder="Escribe el apellido"
          required
        />
      </Form.Group>

      <Button type="submit">Guardar</Button>
    </Form>
  );

}

export default AlumnoForm;

