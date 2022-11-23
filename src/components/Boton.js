import React from "react";
import '../hojas-de-estilo/Boton.css'

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== ".") && (valor !== "=");
  }

  return(
    <button
      className={`boton-contenedor ${esOperador(props.children) ? "operador" : ""}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </button>
  )
}

export default Boton;