import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function EditarAlumno({ alumnos, actualizarAlumno }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const alumnoId = parseInt(id);

    const alumnoExistente = alumnos.find((a) => a.id === alumnoId);
    const [alumno, setAlumno] = useState({});

    useEffect(() => {
        if (!alumnoExistente) {
            alert("Alumno no encontrado");
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
        alert("Alumno actualizado correctamente");
        navigate("/alumnos");
    };

    return (
        <div>
            <h2>Editar Alumno</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>LU</Form.Label>
                    <Form.Control
                        type="text"
                        name="lu"
                        value={alumno.lu || ""}
                        disabled
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        value={alumno.nombre || ""}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        name="apellido"
                        value={alumno.apellido || ""}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Curso</Form.Label>
                    <Form.Control
                        type="text"
                        name="curso"
                        value={alumno.curso || ""}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={alumno.email || ""}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Domicilio</Form.Label>
                    <Form.Control
                        type="text"
                        name="domicilio"
                        value={alumno.domicilio || ""}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="text"
                        name="telefono"
                        value={alumno.telefono || ""}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check
                        type="checkbox"
                        label="Activo"
                        name="estado"
                        checked={alumno.estado || false}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="success" type="submit">
                    Guardar Cambios
                </Button>
            </Form>
        </div>
    );
}

export default EditarAlumno;