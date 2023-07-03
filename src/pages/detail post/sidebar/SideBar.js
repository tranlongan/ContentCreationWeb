import style from "./SideBar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function SideBar({idUser}) {
    const navigate = useNavigate()
    const [dataForProfile, setDataForProfile] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3001/dataForProfile?idUser=${idUser}`)
            .then(res => {
                setDataForProfile(res.data.dataForProfile)
            })
    }, [idUser])
    return (
        <>
            <div className={style.container}>
                <div className={style.listTrendingTopics}>
                    <div className={style.title}>
                        Thông tin
                    </div>
                    <div>
                        <div className={style.infoUser}
                             style={{backgroundImage: `url(${dataForProfile[0]?.background})`}}>
                            <div className={style.coating}>
                                <img alt="img user"
                                     src={dataForProfile[0]?.avatar}/>
                                <div className={style.nameAndFlowers}>
                                    <div className={style.nameUser}
                                         onClick={() => navigate(`/profile/${dataForProfile[0]?.username}?id=${dataForProfile[0]?.id_account}`)}>{dataForProfile[0]?.username}
                                    </div>
                                    <div className={style.followers}>
                                        <div className={style.numberOfFollowers}>
                                            1.234.567
                                        </div>
                                        <label>người theo dõi</label>
                                    </div>
                                </div>
                            </div>
                            <div className={style.follow}>
                                <div className={style.iconFollow}>
                                    <FontAwesomeIcon icon={faPlus}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.samePost}>
                    <div className={style.title}> Bài viết cùng tác giả</div>
                    {
                        dataForProfile.map((data, index) => (
                            <div key={index} className={style.card}>
                                <img alt="img post"
                                     src={data.illustration_for_article}/>
                                <div className={style.infoPost}>
                                    <div className={style.namePost}>{data.title_article}</div>
                                    <div className={style.datePost}>{data.article_date.slice(0, 10)}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default SideBar