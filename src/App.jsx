import { Container } from "react-bootstrap";
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from "./assets/components/Layout";
import InformacionDelAlumno from "./assets/components/InformacionDelAlumno";
import Nosotros from "./assets/components/Nosotros";
import Home from "./assets/components/Home";
import ListaAlumnos from "./assets/components/alumno/ListaAlumno";
import AlumnoForm from "./assets/components/alumno/AlumnoForm";
import ErrorPage from "./assets/components/ErrorPage";
import EditarAlumno from "./assets/components/alumno/EditarAlumno";

// Declaración única de initialAlumnos
const initialAlumnos = JSON.parse(localStorage.getItem("alumnos")) || [];

function App() {
  const [alumnos, setAlumnos] = useState(initialAlumnos);

  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos([...alumnos, nuevoAlumno]);
  };

  const actualizarAlumno = (alumnoActualizado) => {
  const nuevaLista = alumnos.map((alumno) =>
    alumno.id === alumnoActualizado.id ? alumnoActualizado : alumno
  );
  setAlumnos(nuevaLista);
  localStorage.setItem("alumnos", JSON.stringify(nuevaLista));
};

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="alumnos" element={<ListaAlumnos alumnos={alumnos} setAlumnos={setAlumnos}/>} />
          <Route path="alumno/nuevo" element={<AlumnoForm agregarAlumno={agregarAlumno} />} />
          <Route path="alumnos/:id/editar" element={<EditarAlumno alumnos={alumnos} actualizarAlumno={actualizarAlumno}/>} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="alumnos/:id" element={<InformacionDelAlumno alumnos={alumnos} />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;