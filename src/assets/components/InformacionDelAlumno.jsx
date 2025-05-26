import { alumnos } from "./alumno/ListaAlumno";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function InformacionDeAlumno() {
  const { id } = useParams(); // agarra el id
  
    const navigate = useNavigate();

  // Busca el alumno que tiene ese id 
  const alumno = alumnos.find(a => a.id === Number(id));



  return (
    <>
      <h1>Informacion sobre el alumno: {alumno.nombre} {alumno.apellido}</h1>
      <div>Libreta Universitaria: {alumno.lu}</div>
      <div>Año que está cursando: {alumno.curso}</div>
      <div>Email: {alumno.email}</div>
      <div>Domicilio: {alumno.domicilio}</div>
      <div>Teléfono: {alumno.telefono}</div>
      <div>Estado: {alumno.estado ? "Activo" : "Inactivo"}</div>
      <div>Número de id registrado en la página: {alumno.id}</div>
      <div>Nombre: {alumno.nombre}</div>
      <div>Apellido: {alumno.apellido}</div>

      <Button variant="secondary" onClick={() => navigate("/alumnos")}>
        Volver a la lista
      </Button>
    </>
  );
}

export default InformacionDeAlumno;
