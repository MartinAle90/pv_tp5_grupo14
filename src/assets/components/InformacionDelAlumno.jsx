import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

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
    <>
      <h1>Informacion sobre el alumno</h1>
      <div>Número de id registrado en la página: {alumno.id}</div>
      <div>Libreta Universitaria: {alumno.lu}</div>
      <div>Nombre: {alumno.nombre}</div>
      <div>Apellido: {alumno.apellido}</div>
      <div>Año que está cursando: {alumno.curso}</div>
      <div>Email: {alumno.email}</div>
      <div>Domicilio: {alumno.domicilio}</div>
      <div>Teléfono: {alumno.telefono}</div>
      <div>Estado: {alumno.estado ? "Activo" : "Inactivo"}</div>
      
      

      <Button variant="secondary" onClick={() => navigate("/alumnos")}>
        Volver a la lista
      </Button>
    </>
  );
}

export default InformacionDeAlumno;
