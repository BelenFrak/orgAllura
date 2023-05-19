import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
 
  //Ternario --> condicion ? seMuestra : noSeMuestra
 //o puedo usar
  // condicion && seMuestra 

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //LISTA DE EQUIPOS
  const equipos = [

  {
    titulo: "Programación",
    colorPrimario: "#57C278",
    colorSecundario:"#D9F7E9"
  }
  ,
  {
    titulo: "Front End",
    colorPrimario: "#82CFFA",
    colorSecundario:"#E8F8FF"
  }
,

  {
  titulo: "Data Science",
  colorPrimario: "#A6D157",
  colorSecundario:"#F0F8E2"
  }
,
  {
  titulo: "Devops",
  colorPrimario: "#E06B69",
  colorSecundario:"#FDE7E8"
  }
,
  {
  titulo: "Ux y Diseño",
  colorPrimario: "#DB6EBF",
  colorSecundario:"#FAE9F5"
  }
,
  {
  titulo: "Móvil",
  colorPrimario: "#FFBA05",
  colorSecundario:"#FFF5D9"
  }
,
  {
  titulo: "Innovación y Gestión",
  colorPrimario: "#FF8A29",
  colorSecundario:"#FFEEDF"
  }

]
 
  return (
    <div>
      <Header/>
     
      {/*{mostrarFormulario ? <Formulario /> :<></>}*/}
      {mostrarFormulario && <Formulario />}
      <MiOrg  cambiarMostrar={cambiarMostrar} />

        {   
           equipos.map( (equipo) => {
            console.log ("Equipo", equipo)
            return <Equipo/>
           } )
        }

    </div>
    );
  }

export default App;
