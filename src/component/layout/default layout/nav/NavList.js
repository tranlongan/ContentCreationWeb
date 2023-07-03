import style from './NavList.module.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function NavList() {
    const [isActive, setIsActive] = useState('default')
    const navigate = useNavigate()
    return (
        <>
            <div className={style.navList}>
                <ul className={style.list}>
                    <li className={isActive === 'default' ? style.active : ""} onClick={() => {
                        navigate('/', {replace: true})
                        setIsActive('default')
                    }}>Thịnh hành
                    </li>
                    <li className={isActive === '1' ? style.active : ""} onClick={() => {
                        setIsActive('1')
                    }}>Đang follow
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavList