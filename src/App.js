import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Encuestas from "./componentes/Encuestas";

function App() {
  // Estado para rastrear las encuestas
  const encuestas = [
    {
      id: 1,
      pregunta: "¿Cuál es tu género literario favorito?",
      opciones: [
        "Ficción",
        "No ficción",
        "Ciencia ficción",
        "Misterio",
        "Romance",
      ],
    },
    {
      id: 2,
      pregunta: "¿Qué tipo de música prefieres?",
      opciones: ["Rock", "Pop", "Hip-hop", "Jazz", "Electrónica"],
    },
    {
      id: 3,
      pregunta: "¿Cuál es tu destino de vacaciones ideal?",
      opciones: [
        "Mar del Plata",
        "Villa Carlos Paz",
        "Chilecito",
        "La cumbrecita",
        "Tanti",
      ],
    },
    {
      id: 4,
      pregunta: "¿Cuál es tu deporte favorito?",
      opciones: ["Fútbol", "Basquet", "Tenis", "Golf", "Natación"],
    },
    {
      id: 5,
      pregunta: "¿Prefieres leer libros físicos o libros electrónicos?",
      opciones: ["Libros físicos", "Libros electrónicos", "Ambos por igual"],
    },
    {
      id: 6,
      pregunta: "¿Cuál es tu comida favorita?",
      opciones: [
        "Pasta",
        "Ensalada",
        "Asado",
        "Sushi",
        "Matambre a la pizza",
        "Otra",
      ],
    },
    {
      id: 7,
      pregunta: "¿Cuál es tu película tipo de película?",
      opciones: ["Drama", "Comedia", "Acción", "Ciencia ficción", "Animación"],
    },
    {
      id: 8,
      pregunta: "¿Prefieres la playa o la montaña?",
      opciones: ["Playa", "Montaña", "Ambos por igual"],
    },
    {
      id: 9,
      pregunta: "¿Cuál es tu red social favorita?",
      opciones: ["Facebook", "Instagram", "Twitter", "LinkedIn", "Otra"],
    },
    {
      id: 10,
      pregunta: "¿Tienes alguna mascota?",
      opciones: ["Sí, un perro", "Sí, un gato", "Sí, otros animales", "No"],
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ejercicio 4 - Encuestas en React</h1>
      </header>
      <Encuestas encuestas={encuestas} />
      <footer className="App-footer">
        <p>
          Página creada para el Ejercicio 4 de Curso Frontend de React 2023 -
          Ing. Rubén Romero | Alumno: Lautaro Scarafia
        </p>
      </footer>
    </div>
  );
}

export default App;
