import style from './Sidebar.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from "@fortawesome/free-solid-svg-icons";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function SideBar({idUser}) {
    const objId = [{id: 1, name: 'Sản phẩm A'}, {id: 2, name: 'Sản phẩm B'}]
    const navigate = useNavigate()
    const location = useLocation()
    const [check, setCheck] = useState("default")
    const [dataForProfile, setDataForProfile] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/dataForProfile?idUser=${idUser}`)
            .then(res => {
                setDataForProfile(res.data.dataForProfile)
            })
    }, [idUser])

    useEffect(() => {
        if (window.performance) {
            if (location.pathname === `/store/${dataForProfile[0]?.username}`) {
                setCheck('default')
            } else {
                setCheck(location.state?.id)
            }
        }
    }, [check, location.pathname, location.state, dataForProfile])
    return (
        <>
            <div>
                <div className={style.title}>
                    <i><FontAwesomeIcon icon={faList}/></i><label>Danh mục</label>
                </div>
                <ul className={style.list}>
                    <li className={(check === 'default') ? style.active : ""}
                        onClick={() => {
                            setCheck('default')
                            navigate(`/store/${dataForProfile[0]?.username}?id=${idUser}&storeRegistered=1`)
                        }}>
                        Tất cả sản phẩm
                    </li>
                    {objId.map((data, index) => (
                        <li key={index} onClick={() => {
                            setCheck(data.id)
                            navigate(`/store/${dataForProfile[0]?.username}/optionalProducts/${data.name}?id=${idUser}&storeRegistered=1`, {state: {id: data.id, name: data.name}})
                        }} className={check === data.id ? style.active : ""}>
                            {data.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SideBar