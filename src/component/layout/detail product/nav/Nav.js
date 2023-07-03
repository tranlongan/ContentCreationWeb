import style from './Nav.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import axios from "axios";

function Nav({idUser, idProduct}) {
    const [dataForNavStore, setDataForNavStore] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3001/dataForNavStore?idProduct=${idProduct}`)
            .then(res => {
                setDataForNavStore(res.data.dataForNavStore)
            })
    }, [idProduct])
    return (
        <>
            <ul className={style.nav}>
                <li>DIY<i><FontAwesomeIcon icon={faChevronRight}/></i></li>
                <li>{dataForNavStore[0]?.business_category}<i><FontAwesomeIcon icon={faChevronRight}/></i></li>
                <li>{dataForNavStore[0]?.name_store_category}<i><FontAwesomeIcon icon={faChevronRight}/></i></li>
                <li>{dataForNavStore[0]?.name_product}</li>
            </ul>
        </>
    )
}

export default Nav