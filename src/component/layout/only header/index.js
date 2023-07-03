import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import Header from "../../component default/header/Header";
import React from "react";

function OnlyHeader({children}) {
    const Children = children.type
    const location = useLocation()
    const idUser = localStorage.getItem('user');
    const query = new URLSearchParams(location.search)
    const id_user = query.get('id')
    const id_article = query.get('idArticle')
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname])
    return (
        <>
            <Header id={idUser}/>
            <div>
                <Children idUser={id_user} idArticle={id_article}/>
            </div>
        </>
    )
}

export default OnlyHeader