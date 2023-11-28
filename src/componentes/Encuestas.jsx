import React from 'react';
import '../App.css';
import Opciones from './Opciones';


function Encuestas({ encuestas }) {
    return (
        <div className='Encuesta'>
            {encuestas.map(encuesta => (
                    <div>
                        <div className='Preguntas' key={encuesta.id}>
                            {encuesta.pregunta}
                        </div>
                        <Opciones opciones={encuesta.opciones}/>
                    </div>))}
        </div>
    );
}
export default Encuestas;