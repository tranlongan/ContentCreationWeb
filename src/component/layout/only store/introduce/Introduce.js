import style from './Introduce.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBox, faStore, faUserCheck, faUserGroup, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import axios from "axios";

function Introduce({idUser}) {
    const [dataForStore, setDataForStore] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:3001/dataForStore?idUser=${idUser}`)
            .then(res => {
                setDataForStore(res.data.dataForStore)
            })
    }, [idUser])
    return (
        <>
            <div className={style.divBorder}>
                <div className={style.introduceYourself}>
                    <div className={style.review}
                         style={{backgroundImage: `url(${dataForStore[0]?.background_store})`}}>
                        <div className={style.coating}>
                            <div className={"wide"}>
                                <div className={style.infoUser}>
                                    <div className={style.avatar}>
                                        <img alt={"avatar user"}
                                             src={dataForStore[0]?.avatar_store}/>
                                    </div>
                                    <div className={style.info}>
                                        <div className={style.nameUser}>{dataForStore[0]?.name_store}</div>
                                        <div className={style.follow}>
                                            <button className={"btn__around"}>Theo dõi</button>
                                            <label>{dataForStore[0]?.follower} lượt theo dõi</label>
                                        </div>
                                        <div className={style.description}>
                                            <ul className={style.infoStore}>
                                                <li>
                                                    <FontAwesomeIcon icon={faBox}/>
                                                    <div className={style.infoData}>Sản phẩm:</div>
                                                    <label>{dataForStore[0]?.quantity_of_products}</label>
                                                </li>
                                                <li><FontAwesomeIcon icon={faUserPlus}/>
                                                    <div className={style.infoData}>Đang theo dõi:</div>
                                                    <label>{dataForStore[0]?.following}</label>
                                                </li>
                                                <li><FontAwesomeIcon icon={faStore}/>
                                                    <div className={style.infoData}>Chủ đề kinh doanh:</div>
                                                    <label>{dataForStore[0]?.business_category}</label>
                                                </li>
                                            </ul>
                                            <ul className={style.infoStore}>
                                                <li><FontAwesomeIcon icon={faUserGroup}/>
                                                    <div className={style.infoData}>Người theo dõi:</div>
                                                    <label>{dataForStore[0]?.follower}</label>
                                                </li>
                                                <li><FontAwesomeIcon icon={faUserCheck}/>
                                                    <div className={style.infoData}>Tham gia vào:</div>
                                                    <label>{dataForStore[0]?.registration_date.slice(0,10)}</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduce