import Nav from "./nav/Nav";
import Content from "./content/Content";
import MyStore from "./my store/MyStore";
import InfoProduct from "./info product/InfoProduct";
import Description from "./depcription product/Description";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import ReviewAndEvaluation from "./review and evaluation/ReviewAndEvaluation";
import Header from "../../component default/header/Header";

function DetailProduct({children}) {
    const location = useLocation()
    const idUser = localStorage.getItem('user')
    const query = new URLSearchParams(location.search)
    const id_user = query.get('idUser')
    const id_product = query.get('idProduct')
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname])
    return (
        <>
            <Header id={idUser}/>
            <div className={"wide"}>
                <Nav idUser={id_user} idProduct={id_product}/>
                <Content idUser={id_user} idProduct={id_product}/>
                <MyStore/>
                <InfoProduct/>
                <Description/>
                <ReviewAndEvaluation children={children}/>
            </div>
        </>
    )
}

export default DetailProduct