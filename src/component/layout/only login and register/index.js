import style from './OnlyLogin.module.css'
import {useLocation} from "react-router-dom";

function OnlyLoginAndRegister({children}) {
    const {pathname} = useLocation()
    return (
        <>
            <div className={style.background}
                 style={pathname === '/login' ?
                     {backgroundImage: 'url(https://nhadepso.com/wp-content/uploads/2023/02/anh-phong-canh-co-trang_5.jpg)'} :
                     {backgroundImage: 'url(https://pbs.twimg.com/media/EGMxHumUYAAD6m7.jpg)'}}>
                <div className={style.coating}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default OnlyLoginAndRegister