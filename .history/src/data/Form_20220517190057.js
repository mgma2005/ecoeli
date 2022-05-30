import React,{useState,useRef, Component} from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import {esNombre,esCorreo} from "./validaciones"

//Manejo de formularios en React


//Inputs controlados
class Form extends Component=(){
class InputText extends React.Component{
  constructor(props){
    super(props);
    this.actualizarState = this.actualizarState.bind(this);
    this.state = {
      value:"",
      error:false,
      mensajeError:""
    };
  }
  actualizarState(e){
    const {name, value} = e.target;
    //console.log(name)
    //console.log(value)
    console.log(this.props.validacion(value));
    
    if(this.props.validacion(value)){
      this.setState({
        value,
        error:false,
        mensajeError:""
      });
      this.props.actualizarState({
        name,value,error:false
      });
    }else{
      this.setState({
        value,
        error:true,
        mensajeError:this.props.mensajeError
      });
      this.props.actualizarState({
        name,value,error:true
      });
    }
  }
  render(){
    return(
      <div className="componente-input">
        <label htmlFor={"id-"+this.props.name}>{this.props.label}</label>
        <input
          id={"id-"+this.props.name}
          type="text"
          name={this.props.name}
          placeholder={this.props.placeholder}
          className={this.state.error ? "border-error":""}
          onChange={this.actualizarState}/>
          {
            this.state.error ? (
            <p className="componente-input-error">{this.state.mensajeError}</p>
            ):("")
          }
      </div>
    )
  }
}


class Componente extends React.Component{

  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
    this.actualizarState = this.actualizarState.bind(this);
    this.state = {
      nombre:{
        value:"",
        error:true
      },
      correo:{
        value:"",
        error:true
      },
      prioridad:{
        value:false,
        error:true
      },
      opciones:{
        value:"",
        error:true
      }
    }
  }
  
  actualizarState(input){
    this.setState({
      ...this.state,
      [input.name]:{
        value:input.value,
        error:input.error
      }
    }, ()=>{console.log(this.state);});
    
  }

  submit(e){
    e.preventDefault();
    console.log(this.state)
  }

  render(){
    return(
      <form onSubmit={this.submit}>
        <h1>{"Formularios EWebik"}</h1>
        <InputText
          label="Nombre"
          name="nombre"
          placeholder="Nombre"
          validacion={esNombre}
          mensajeError="Se esperaban letras"
          actualizarState={this.actualizarState} />
        
        <InputText
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
            "button-disable":"button"}>
          Enviar
        </button>
      </form>
    )
  }
}

ReactDOM.render(
  <Componente/>,
  document.getElementById('root')
);}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default Form