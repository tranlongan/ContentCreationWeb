import SideBar from "./sidebar/SideBar";
import NavList from "./nav/NavList";
import Header from "../../component default/header/Header";
import style from './index.module.css'
function DefaultLayout({children}) {
    const idUser = localStorage.getItem('user');
    return (
        <>
            <div className={style.pageStart} style={{background:"radial-gradient(circle, rgba(225,176,214,0.6) 0%, rgba(236,238,174,0.6) 30%, rgba(148,227,233,0.6) 100%)"}}>
                <Header id={idUser}/>
                <div className="container">
                    <div className="wide__l">
                        <div className="row">
                            <div className="col l9">
                                <div className={"row"}>
                                    <NavList/>
                                </div>
                                {children}
                            </div>
                            <div className="col l3">
                                <SideBar/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DefaultLayout