import style from "./OptionalProducts.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

function OptionalProducts() {
    const {option} = useParams()
    useEffect(() => {
        console.log(option)
    })
    return (
        <>
            <div className={style.products}>
                <div className={"row"}>
                    <div className={"col l4"}>
                        <div className={style.card}>
                            <div className={style.header}>
                                <img alt={"img product"}
                                     src={"https://i.pinimg.com/564x/7e/90/af/7e90affd3ec633dd2001fc16e034c021.jpg"}/>
                                <div className={style.infoProduct}>
                                    <div className={style.title}>
                                        Sản phẩm A
                                    </div>
                                    <div className={style.price}>
                                        280.000đ
                                    </div>
                                </div>
                            </div>
                            <div className={style.footer}>
                                <div className={style.evaluate}>
                                    <div className={style.iconEvaluate}>
                                        <i><FontAwesomeIcon icon={faStar}/></i>
                                        <i><FontAwesomeIcon icon={faStar}/></i>
                                        <i><FontAwesomeIcon icon={faStar}/></i>
                                        <i><FontAwesomeIcon icon={faStar}/></i>
                                        <i><FontAwesomeIcon icon={faStar}/></i>
                                    </div>
                                    <div className={style.sold}>100 đã bán</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col l4"}>
                        <div className={style.card}>
                            <div className={style.header}>
                                <img alt={"img product"}
                                     src={"https://i.pinimg.com/564x/c7/fb/9e/c7fb9e93c6c9aa8fcbd50dbf530f3cb6.jpg"}/>
                                <div className={style.infoProduct}>
                                    <div className={style.title}>
                                        Sản phẩm A
                                    </div>
                                    <div className={style.price}>
                                        280.000đ
                                    </div>
                                </div>
                            </div>
                            <div className={style.footer}>
                                <div className={style.evaluate}>
                                    <div className={style.iconEvaluate}>
                                        <i><FontAwesomeIcon icon={faStar}/></i>
                                        <i><FontAwesomeIcon icon={faStar}/></i>
                                        <i><FontAwesomeIcon icon={faStar}/></i>
                                        <i><FontAwesomeIcon icon={faStar}/></i>
                                        <i><FontAwesomeIcon icon={faStar}/></i>
                                    </div>
                                    <div className={style.sold}>100 đã bán</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col l4"}>
                        <div className={style.card}>
                            <div className={style.header}>
                                <img alt={"img product"}
                                     src={"https://i.pinimg.com/564x/c8/17/03/c817033c52ed47399f3e56b64fa7d4d5.jpg"}/>
                                <div className={style.infoProduct}>
                                    <div className={style.title}>
                                        Sản phẩm A
                                    </div>
                                    <div className={style.price}>
                                        280.000đ
                                    </div>
                                </div>
                            </div>
                            <div className={style.footer}>
                                <div className={style.evaluate}>
                                    <div className={style.iconEvaluate}>
                                        <i><FontAwesomeIcon icon={faStar}/></i>
                                        <i><FontAwesomeIcon icon={faStar}/></i>
                                        <i><FontAwesomeIcon icon={faStar}/></i>
                                        <i><FontAwesomeIcon icon={faStar}/></i>
                                        <i><FontAwesomeIcon icon={faStar}/></i>
                                    </div>
                                    <div className={style.sold}>100 đã bán</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OptionalProducts