import React from 'react';
import '../stylesheets/Boton.css';

function Boton(props) {

  const esOperador = valor => {
    return  isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return (
    <div className={`boton-container ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} 
    onClick={() => props.manejarClic(props.children)}>  
    {/* .trimEnd() o .trimStart(), sirve para eliminar espacios en blanco al inicio o al final de una cadena de caracteres */}
      {props.children}
    </div>
  );
};

export default Boton;