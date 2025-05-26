import { Container } from "react-bootstrap"
import { useState } from 'react'
import { Router, Routes, Route } from "react-router-dom"
import Layout from "./assets/components/Layout"
import ErrorPage from "./assets/components/ErrorPage"
import Nosotros from "./assets/components/Nosotros"
import Home from "./assets/components/Home"
import ListaAlumnos from "./assets/components/alumno/ListaAlumno"
import AlumnoForm from "./assets/components/alumno/AlumnoForm"
import EditarAlumno from "./assets/components/alumno/EditarAlumno";




function App() {

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="alumnos" element={<ListaAlumnos />} />
          <Route path="alumno/nuevo" element={<AlumnoForm />} />
          <Route path="alumnos/:id/editar" element={<EditarAlumno />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="*" element={ <ErrorPage />} />
        </Route>
      </Routes>
    </Container>
  )

}

export default App
