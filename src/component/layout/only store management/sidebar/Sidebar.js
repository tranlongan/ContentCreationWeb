import style from './Sidebar.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBoxesStacked,
    faChartColumn,
    faClipboardList,
    faGear,
    faHouse,
    faUsersBetweenLines
} from "@fortawesome/free-solid-svg-icons";
import {faNewspaper} from "@fortawesome/free-regular-svg-icons";
import {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const idUser = query.get('id')
    const storeRegistered = query.get('storeRegistered')
    const [check, setCheck] = useState(1)
    const [dataForProfile, setDataForProfile] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3001/dataForProfile?idUser=${idUser}`)
            .then(res => {
                setDataForProfile(res.data.dataForProfile)
            })
    }, [idUser])
    const {option} = useParams()
    useEffect(() => {
        if (location.pathname === `/storeManagement/${option}`) {
            setCheck(1)
        } else {
            setCheck(location.state)
        }
    }, [idUser, location.pathname, location.state, storeRegistered, dataForProfile, option])

    return (
        <>
            <div className={style.sidebar}>
                <div className={style.navList}>
                    <div className={style.navItem} style={{color: "gray"}}
                         onClick={() => navigate('/', {replace: true})}>
                        <i><FontAwesomeIcon icon={faHouse}/></i><label>Trang chủ</label>
                    </div>
                    <div className={check === 1 ? `${style.navItem} ${style.active}` : `${style.navItem}`}
                         onClick={() => {
                             navigate(`/storeManagement/${dataForProfile[0]?.username}?id=${idUser}&storeRegistered=${storeRegistered}`, {state: 1})
                             setCheck(1)
                         }}>
                        <i><FontAwesomeIcon icon={faChartColumn}/></i><label>Tổng quan</label>
                    </div>
                    <div className={check === 2 ? `${style.navItem} ${style.active}` : `${style.navItem}`}
                         onClick={() => {
                             navigate(`/storeManagement/${dataForProfile[0]?.username}/catalogManagement?id=${idUser}&storeRegistered=${storeRegistered}`, {state: 2})
                             setCheck(2)
                         }}>
                        <i><FontAwesomeIcon icon={faNewspaper}/></i><label>Quản lý danh mục</label>
                    </div>
                    <div className={check === 3 ? `${style.navItem} ${style.active}` : `${style.navItem}`}
                         onClick={() => {
                             navigate(`/storeManagement/${dataForProfile[0]?.username}/productManagement?id=${idUser}&storeRegistered=${storeRegistered}`, {state: 3})
                             setCheck(3)
                         }}>
                        <i><FontAwesomeIcon icon={faBoxesStacked}/></i><label>Quản lý sản phẩm</label>
                    </div>
                    <div className={style.navItem}>
                        <i><FontAwesomeIcon icon={faClipboardList}/></i><label>Quản lý đơn hàng</label>
                    </div>
                    <div className={style.navItem}>
                        <i><FontAwesomeIcon icon={faUsersBetweenLines}/></i><label>Khách hàng</label>
                    </div>
                    <div className={style.navItem}>
                        <i><FontAwesomeIcon icon={faGear}/></i><label>Cài đặt</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar