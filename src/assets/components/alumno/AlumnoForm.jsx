import { useParams } from "react-router-dom";

function AlumnoForm() {
    const { id } = useParams();
    const esEdicion = Boolean(id);

    return (
        <div>
            <h2>Formulario de Alumno</h2>;
          <h2>{esEdicion ? "Editar Alumno" : "Nuevo Alumno"}</h2>
          {/* Formulario reutilizable */}
        </div>
      );
}
export default AlumnoForm;