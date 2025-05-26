import React, { useState } from 'react';
import { Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

/*
export const alumnos = [
    {
        id: 1,
        lu: "APU00999",
        nombre: "María Eugenia",
        apellido: "Diaz",
        curso: "Tercero",
        email: "mariadiaz@mail.com",
        domicilio: "Av. Congreso 125",
        telefono: "3884895999",
        estado: true,
    },
    {
        id: 2,
        lu: "APU01000",
        nombre: "Juan",
        apellido: "Pérez",
        curso: "Segundo",
        email: "juanperez@mail.com",
        domicilio: "Calle Falsa 123",
        telefono: "3884123456",
        estado: false,
    }
];
*/

function ListaAlumnos({alumnos, setAlumnos}) {
    const navigate = useNavigate();
    /*
    const [alumnos, setAlumnos] = useState([
        {
            id: 1,
            lu: "APU00999",
            nombre: "María Eugenia",
            apellido: "Diaz",
            curso: "Tercero",
            email: "mariadiaz@mail.com",
            domicilio: "Av. Congreso 125",
            telefono: "3884895999",
            estado: true,
        },
        {
            id: 2,
            lu: "APU01000",
            nombre: "Juan",
            apellido: "Pérez",
            curso: "Segundo",
            email: "juanperez@mail.com",
            domicilio: "Calle Falsa 123",
            telefono: "3884123456",
            estado: false,
        }
    ]);
    */
    const eliminarAlumno = (id) => {
        const alumno = alumnos.find(a => a.id === id);
        const confirmar = window.confirm(`¿Está seguro que desea eliminar a ${alumno.nombre} ${alumno.apellido}?`);
        if (confirmar) {
            const nuevaLista = alumnos.filter(alumno => alumno.id !== id);
            setAlumnos(nuevaLista);
            localStorage.setItem("alumnos", JSON.stringify(nuevaLista));

        }
    };

    return (
        <div>
            <h2 className="mb-4">Lista de Alumnos</h2>
            <Row>
                {alumnos.map(alumno => (
                    <Col md={4} key={alumno.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{alumno.nombre} {alumno.apellido}</Card.Title>
                                <Card.Text>
                                    <strong>LU:</strong> {alumno.lu}<br />
                                    <strong>Estado:</strong> {alumno.estado ? "Activo" : "Inactivo"}
                                </Card.Text>
                                <Button
                                    variant="primary"
                                    className="me-2"
                                    onClick={() => navigate(`/alumnos/${alumno.id}/editar`)}
                                >
                                    Editar
                                </Button>
                                <Button
                                variant="danger"
                                className="me-2"
                                onClick={() => {
                                    if (window.confirm(`¿Eliminar a ${alumno.nombre}, con ID: ${alumno.id}?`)) {
                                        eliminarAlumno(alumno.id);
                                    }
                                    }}
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
        </div>
    );
}

export default ListaAlumnos;