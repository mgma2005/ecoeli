import React,{useState,useRef, Component} from 'react';
//import Formjs from'./Formjs';
import React from 'react';
import * as serviceWorker from './serviceWorker';
import {esNombre,esCorreo} from "./validaciones"

//Manejo de formularios en React


class Formjs {
  constructor() {

    constructor(props); {
      super(props);
      this.submit = this.submit.bind(this);
      this.actualizarState = this.actualizarState.bind(this);
      this.state = {
        nombre: {
          value: "",
          error: true
        },
        correo: {
          value: "",
          error: true
        },
        prioridad: {
          value: false,
          error: true
        },
        opciones: {
          value: "",
          error: true
        }
      };
    }

    actualizarState(input); {
      this.setState({
        ...this.state,
        [input.name]: {
          value: input.value,
          error: input.error
        }
      }, () => { console.log(this.state); });

    }

    submit(e); {
      e.preventDefault();
      console.log(this.state);
    }

    render(); {
      return (
        <form onSubmit={this.submit}>
          <h1>{"Formularios EWebik"}</h1>
          <input
            label="Nombre"
            name="nombre"
            placeholder="Nombre"
            validacion={esNombre}
            mensajeError="Se esperaban letras"
            actualizarState={this.actualizarState} />

          <input
            label="Correo"
            name="correo"
            placeholder="Correo"
            validacion={esCorreo}
            mensajeError="Correo no valido"
            actualizarState={this.actualizarState} />



          <button
            disabled={this.state.nombre.error ||
              this.state.correo.error ||
              this.state.opciones.error}
            type="submit"
            className={this.state.nombre.error ||
              this.state.correo.error ||
              this.state.opciones.error
              ?
              "button-disable" : "button"}>
            Enviar
          </button>
        </form>
      );
    }
  }
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default Formjs