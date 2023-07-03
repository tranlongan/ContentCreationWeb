import style from "./Content.module.css";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

function Content({children, id}) {
    const [check, setCheck] = useState(1)
    const [dataForProfile, setDataForProfile] = useState([])
    const location = useLocation()
    const Children = children.type
    useEffect(() => {
        axios.get(`http://localhost:3001/dataForProfile?idUser=${id}`)
            .then(res => {
                setDataForProfile(res.data.dataForProfile)
            })
    }, [id])

    useEffect(() => {
        if (location.pathname === `/profile/${dataForProfile[0]?.username}`) {
            setCheck(1)
        } else {
            if (location.state === '' || location.state === undefined || location.state === null) {
                setCheck(2)
            } else {
                setCheck(location.state)
            }
        }
    }, [location.pathname, location.state, dataForProfile])

    const navigate = useNavigate()
    return (
        <div className={"wide"}>
            <div className={style.container}>
                <ul className={style.navLink}>
                    <li onClick={() => {
                        setCheck(1)
                        navigate(`/profile/${dataForProfile[0]?.username}?id=${dataForProfile[0]?.id_account}`, {state: 1})
                    }} className={check === 1 ? style.active : ""}>Tất cả bài viết
                    </li>
                    <li onClick={() => {
                        navigate(`/profile/myStore?id=${id}`, {state: 2})
                        setCheck(2)
                    }} className={check === 2 ? style.active : ""}>Giỏ hàng
                    </li>
                </ul>
                <div className="row">
                    <Children id={id}/>
                </div>
            </div>
        </div>
    )
}

export default Content