import style from "./Content.module.css";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import axios from "axios";

function Content({idUser}) {
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
            {
                dataForProfile.map((data, index) => (
                    <div key={index} className={"col l3"} onClick={()=>{
                        navigate(`/detailPost/${data.username}?id=${idUser}&idArticle=${data.id_article}`)
                    }}>
                        <div className={style.cardArticles}>
                            <div className={style.header}>
                                <img alt={"img post"}
                                     src={data.illustration_for_article}/>
                                <div className={style.infoArticles}>
                                    <div className={style.title} onClick={() => {
                                        navigate('/detail post')
                                    }}>{data.title_article}
                                    </div>
                                    <div className={style.tags}>
                                        <div>#tag1</div>
                                        <div>#tag2</div>
                                        <div>#tag3</div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.footer}>
                                <div className={style.like}>
                                    <i>
                                        <FontAwesomeIcon icon={faHeart}/>
                                    </i>
                                    <i className={style.numberOfLikes}>32k</i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Content