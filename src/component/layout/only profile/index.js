import Introduce from "./introduce/Introduce";
import Content from "./content/Content";
import Header from "../../component default/header/Header";
import {useLocation} from "react-router-dom";

function OnlyProfile({children}) {
    const idUser = localStorage.getItem('user')
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const id_user = query.get('id')
    return (
        <>
            <Header id={idUser}/>
            <Introduce id={id_user}/>
            <Content children={children} id={id_user}/>
        </>
    )
}

export default OnlyProfile