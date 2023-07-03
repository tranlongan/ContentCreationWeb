import style from "./PageStart.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function PageStart() {
    const navigate = useNavigate()
    const [contentDefault, setContentDefault] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then(res => {
                setContentDefault(res.data.contentDefault)
            })
    }, [])
    return (
        <>
            <div className={style.content}>
                <div className={"row"}>
                    {
                        contentDefault.map((data, index) => (
                            <div className={"col l3"} key={index}>
                                <div className={style.card} onClick={() => {
                                    navigate(`/detailPost/${data.username}?id=${data.id_user}&idArticle=${data.id_article}`)
                                }}>
                                    <div className={style.nameUser}>{data.username}</div>
                                    <div className={style.header}>
                                        <div className={style.illustration}
                                             style={{backgroundImage: `url(${data.illustration_for_article})`}}>
                                            <div className={style.coating}></div>
                                        </div>
                                    </div>
                                    <div className={style.footer}>
                                        <img alt={"avatar"}
                                             src={data.avatar}/>
                                        <div className={style.infoOfPost}>
                                            <div className={style.titlePost}>
                                                {data.title_article}
                                            </div>
                                            <div className={style.tags}></div>
                                        </div>
                                        <div className={style.view}>
                                            <div style={{display: "flex"}}>
                                                Chi tiết
                                                <div className={style.iconView}>
                                                    <div className={style.iconView}>
                                                        <i><FontAwesomeIcon icon={faArrowRightLong}/></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default PageStart;
