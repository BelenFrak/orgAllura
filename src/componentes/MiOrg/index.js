
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //useState() es una funcion
    //const [nombreVariable, funcionActualiza] = useState(valorIniciall)
    console.log(props)
    //const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
        // console.log("Mostrar/Ocultar elemento", !mostrar)
        // actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="img/add.png" alt="boton add" onClick={props.cambiarMostrar}/>

    </section>
}
export default MiOrg;