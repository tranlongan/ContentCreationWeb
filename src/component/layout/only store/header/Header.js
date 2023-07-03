import style from "./Header.module.css"
import "../../../../css default/button.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRightFromBracket, faArrowUpFromBracket, faBoxesPacking,
    faCartShopping,
    faGears,
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

function Header({id}) {
    const [isLogin, setIsLogin] = useState(true)
    const [dataForHeader, setDataForHeader] = useState({});

    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        setIsLogin(id !== null)
        axios.get(`http://localhost:3001/dataForHeader?idUser=${id}`)
            .then(res => {
                setDataForHeader(res.data.dataForHeader)
            })
    },[id])

    return (
        <>
            <div className={style.navbar}>
                <div className={style.navbarLogo} onClick={() => {
                    navigate('/', {replace: true})
                    console.log('ye')
                }}>
                    <img alt="logo" className={style.navbarLogoImage} src='/logo/logo.png'/>
                    <div className={style.navbarLogoName}>DIY</div>
                </div>
                <div className={style.navSearch}>
                    <input placeholder="Tìm kiếm"/>
                    <div className={style.iconNavSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </div>
                </div>
                {
                    !isLogin &&
                    <div className={style.navbarList}>
                        <button onClick={() => navigate('/login', {state: location.pathname})}
                                className="btn__info">Đăng nhập
                        </button>
                        <label>Bạn chưa có tài khoản ư?</label>
                    </div>
                }
                {
                    isLogin &&
                    <div className={style.navbarList}>
                        <div className={style.upload}>
                            <i><FontAwesomeIcon icon={faArrowUpFromBracket}/></i><label>Tải lên</label>
                        </div>
                        <div className={style.cart}>
                            <i><FontAwesomeIcon icon={faCartShopping}/></i>
                            <div className={style.amountProducts}>2</div>
                            <div className={style.productsInCart}>
                                <div className={style.title}>
                                    Sản phẩm đã thêm
                                </div>
                                <div className={style.product}>
                                    <img alt={"img product"}
                                         src={"https://i.pinimg.com/564x/af/ec/d7/afecd7e3820a817bc6c0b138e3b00143.jpg"}/>
                                    <div className={style.nameProduct}>Sản phẩm A</div>
                                    <div className={style.price}>{Intl.NumberFormat().format(200000)}đ</div>
                                </div>
                                <div className={style.product}>
                                    <img alt={"img product"}
                                         src={"https://i.pinimg.com/564x/af/ec/d7/afecd7e3820a817bc6c0b138e3b00143.jpg"}/>
                                    <div className={style.nameProduct}>Sản phẩm A</div>
                                    <div className={style.price}>{Intl.NumberFormat().format(200000)}đ</div>
                                </div>
                                <div className={style.product}>
                                    <img alt={"img product"}
                                         src={"https://i.pinimg.com/564x/af/ec/d7/afecd7e3820a817bc6c0b138e3b00143.jpg"}/>
                                    <div className={style.nameProduct}>Sản phẩm A</div>
                                    <div className={style.price}>{Intl.NumberFormat().format(200000)}đ</div>
                                </div>
                                <div className={style.viewCart}>
                                    <button className={"btn__warning"}>Xem giỏ hàng</button>
                                </div>
                            </div>
                        </div>
                        <div className={style.infoUser}>
                            <img alt={"avatar"}
                                 src={dataForHeader[0]?.avatar}/>
                            <label>{dataForHeader[0]?.username}</label>
                            <div className={style.userOptions}>
                                <div onClick={() => {
                                    navigate(`/profile/${dataForHeader[0]?.username}?id=${dataForHeader[0]?.id_account}`)
                                }}>
                                    <i><FontAwesomeIcon icon={faUser}/></i><label>Xem hồ sơ</label>
                                </div>
                                <div>
                                    <i><FontAwesomeIcon icon={faBoxesPacking} /></i><label>Quản lý cửa hàng</label>
                                </div>
                                <div>
                                    <i><FontAwesomeIcon icon={faGears}/></i><label>Cài đặt</label>
                                </div>
                                <div onClick={() => {
                                    localStorage.removeItem('user')
                                    window.location.reload()
                                }}>
                                    <i><FontAwesomeIcon icon={faArrowRightFromBracket}/></i><label>Đăng xuất</label>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Header