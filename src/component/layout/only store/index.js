import Introduce from "./introduce/Introduce";
import SideBar from "./sidebar/SideBar";
import Content from "./content/Content";
import Header from "./header/Header";
import {useLocation} from "react-router-dom";


function OnlyStore({children}) {
    const idUser = localStorage.getItem('user')
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    // const storeRegistered = query.get('storeRegistered')
    const idUser_ = query.get('id')

    return (
        <>
            <div>
                <Header id={idUser}/>
                <Introduce idUser={idUser_}/>
                <div className={"wide"} style={{backgroundColor: "rgba(204, 199, 194, 0.4)"}}>
                    <div className={"row"} style={{margin: "120px 0 40px 0"}}>
                        <div className={"col l2"}>
                            <SideBar idUser={idUser_}/>
                        </div>
                        <div className={"col l10"}>
                            <Content children={children}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnlyStore