import './App.css'
import Boton from './components/Boton'
import Pantalla from './components/Pantalla'
import BotonClear from './components/BotonClear'
import { useState } from 'react'
import { evaluate } from 'mathjs'
import Clock from './components/Clock'
import { IoIosWifi, IoIosBatteryFull } from 'react-icons/io'
import { TbAntennaBars5 } from 'react-icons/tb'

function App() {

  const [input, setInput] = useState('');

  const agregarInput = value => {
    setInput(input + value);
  };

  const calcularResultado = () => {
    if(input){
    setInput(evaluate(input))
    }else{
      alert("Ingrese una operación");
    }
  };

  return (
    <div className="App">
      <div className="contenedor-calculadora">

        <div className="button1">.</div>
        <div className="button2">.</div>
        <div className="button3">.</div>
        <div className="button4">.</div>
        
        <div className="desings">
          <div className="sound">.</div>
          <div className="camera">.</div>
        </div>

        <div className="display">
          <Clock />
          <TbAntennaBars5 className='icons' />
          <IoIosWifi className='icons' />
          <IoIosBatteryFull className='icons' />
        </div>

        <Pantalla input={input} />
        <div className="fila comandos">
          <BotonClear manejarClear={() => setInput('')}>AC</BotonClear>
          <Boton manejarClic={agregarInput}>+/-</Boton>
          <Boton manejarClic={agregarInput}>%</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila resultado">
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
        </div>
          <div className='line'>&nbsp</div>
      </div>
        <div className="made">
          By <a target='blank' href="https://github.com/LizardoCt">nene.</a>
        </div>
    </div>
  );
}

export default App;
