import style from "./Content.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faClock, faHeart} from "@fortawesome/free-regular-svg-icons";
import {useEffect, useState} from "react";
import axios from "axios";

function Content({idUser, idArticle}) {
    const [isLogin, setIsLogin] = useState(true)
    const [dataForDetailPost, setDataForDetailPost] = useState([])
    const [materials, setMaterials] = useState([])
    useEffect(() => {
        setIsLogin(idUser !== null)
        axios.get(`http://localhost:3001/dataForDetailPost?idArticle=${idArticle}`)
            .then((res, index) => {
                setDataForDetailPost(res.data.dataForDetailPost)
                setMaterials(res.data.materials1)
            })
    }, [idUser,idArticle])
    return (
        <>
            <div className={style.card}>
                <div className={style.header}>
                    <div className={style.datePost}>
                        <FontAwesomeIcon icon={faClock}/>
                        <div className={style.date}>{dataForDetailPost[0]?.article_date.slice(0, 10)}</div>
                    </div>
                    <div className={style.description}>
                        {dataForDetailPost[0]?.title_article}
                    </div>
                    <div>
                        <div className={style.listBtn}>
                            <div className={style.tags}>
                                <div>#Tag1</div>
                                <div>#Tag2</div>
                                <div>#Tag3</div>
                            </div>
                            <i>
                                <FontAwesomeIcon icon={faHeart}/>
                            </i>
                            <i className={style.numberOfLikes}>32k</i>
                            <i>
                                <FontAwesomeIcon icon={faBookmark}/>
                            </i>
                        </div>
                    </div>
                </div>
                <div className={style.footer} dangerouslySetInnerHTML={{__html: dataForDetailPost[0]?.content}}></div>
                {
                    materials[0] !== undefined &&
                    <div className={style.title}>Tài nguyên cho dự án này</div>
                }
                <div className={style.categories}>
                    {materials?.map((item, index) => (
                        <div className={style.cardCategory} key={index}>
                            <div className={style.infoCategory}>
                                <img alt="img category"
                                     src="https://luctuyetkytuyetme.files.wordpress.com/2022/07/1-luc-tuyet-ky.jpg"/>
                                <div className={style.nameCategory}>{item.material}</div>
                            </div>
                            <div className={style.btnViewCategory}>
                                <button>
                                    Xem thêm
                                </button>
                            </div>
                        </div>))}
                </div>
            </div>
            <div className={style.products}>
                <div className={style.titleProduct}>
                    <div className={style.widget}>
                        Có thể các bạn sẽ muốn xem các mặt hàng khác từ cửa hàng của tôi
                    </div>
                    <div className={style.viewAllProducts}>
                        Xem tất cả>>
                    </div>
                </div>
                <div className={style.listProduct}>
                    <div className={style.cardProduct}
                         style={{backgroundImage: `url(https://i.pinimg.com/564x/9e/8b/72/9e8b7243831d4511f7d8d2a5b8b9bdf0.jpg)`}}>
                        <div className={style.coating}>
                            <div className={style.nameProduct}>
                                Sản phẩm A
                            </div>
                        </div>
                    </div>
                    <div className={style.cardProduct}
                         style={{backgroundImage: `url(https://i.pinimg.com/564x/9e/8b/72/9e8b7243831d4511f7d8d2a5b8b9bdf0.jpg)`}}>
                        <div className={style.coating}>
                            <div className={style.nameProduct}>
                                Sản phẩm A
                            </div>
                        </div>
                    </div>
                    <div className={style.cardProduct}
                         style={{backgroundImage: `url(https://i.pinimg.com/564x/9e/8b/72/9e8b7243831d4511f7d8d2a5b8b9bdf0.jpg)`}}>
                        <div className={style.coating}>
                            <div className={style.nameProduct}>
                                Sản phẩm A
                            </div>
                        </div>
                    </div>
                    <div className={style.cardProduct}
                         style={{backgroundImage: `url(https://i.pinimg.com/564x/9e/8b/72/9e8b7243831d4511f7d8d2a5b8b9bdf0.jpg)`}}>
                        <div className={style.coating}>
                            <div className={style.nameProduct}>
                                Sản phẩm A
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.comments}>
                <div className={style.title}>Bình luận</div>
                <div className={style.cardComment}>
                    <div className={style.infoCommentator}>
                        <img alt="avatar user"
                             src="https://i.pinimg.com/564x/be/38/14/be3814c6d6e445923de0123ed4f1cbe8.jpg"/>
                        <div className={style.nameAndDate}>
                            <div className={style.nameUser}>Norman</div>
                            <div className={style.dateComment}>10/04/2023</div>
                        </div>
                    </div>
                    <div className={style.commentContent}>
                        Chức năng bình luận đang trong giai đoạn phát triển, chức năng này sẽ sớm có mặt khi tôi bắt đầu
                        làm BackEnd
                    </div>
                    <div className={style.btnReply}>
                        Trả lời
                    </div>
                </div>
                <div className={style.cardComment}>
                    <div className={style.infoCommentator}>
                        <img alt="avatar user"
                             src="https://i.pinimg.com/564x/be/38/14/be3814c6d6e445923de0123ed4f1cbe8.jpg"/>
                        <div className={style.nameAndDate}>
                            <div className={style.nameUser}>Norman</div>
                            <div className={style.dateComment}>10/04/2023</div>
                        </div>
                    </div>
                    <div className={style.commentContent}>
                        Chức năng bình luận đang trong giai đoạn phát triển, chức năng này sẽ sớm có mặt khi tôi bắt đầu
                        làm BackEnd
                    </div>
                    <div className={style.btnReply}>
                        Trả lời
                    </div>
                </div>
                <div className={style.cardComment}>
                    <div className={style.infoCommentator}>
                        <img alt="avatar user"
                             src="https://i.pinimg.com/564x/be/38/14/be3814c6d6e445923de0123ed4f1cbe8.jpg"/>
                        <div className={style.nameAndDate}>
                            <div className={style.nameUser}>Norman</div>
                            <div className={style.dateComment}>10/04/2023</div>
                        </div>
                    </div>
                    <div className={style.commentContent}>
                        Chức năng bình luận đang trong giai đoạn phát triển, chức năng này sẽ sớm có mặt khi tôi bắt đầu
                        làm BackEnd
                    </div>
                    <div className={style.btnReply}>
                        Trả lời
                    </div>
                </div>
                <div className={style.viewMore}>
                    Xem tất cả
                </div>
                {isLogin && <div className={style.reply}>
                    <img alt="my avatar"
                         src={"https://i.pinimg.com/564x/15/38/d4/1538d40211355f15157803b8475e644d.jpg"}/>
                    <div className={style.inputReply}>
                        <input/>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default Content