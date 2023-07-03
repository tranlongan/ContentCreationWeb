import style from './Comment.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

function Comment() {
    return (
        <>
            <div>
                <div className={style.comment}>
                    <div className={style.header}>
                        <img alt={"avatar"}
                             src={"https://i.pinimg.com/564x/0c/bf/6b/0cbf6ba3e1756ffd90f7af1d41a0a697.jpg"}/>
                        <div className={style.info}>
                            <div className={style.name}>Norman</div>
                            <div className={style.evaluation}>
                                <div className={style.icons}>
                                    <i><FontAwesomeIcon icon={faStar}/></i>
                                    <i><FontAwesomeIcon icon={faStar}/></i>
                                    <i><FontAwesomeIcon icon={faStar}/></i>
                                    <i><FontAwesomeIcon icon={faStar}/></i>
                                    <i><FontAwesomeIcon icon={faStar}/></i>
                                </div>
                            </div>
                            <div className={style.dateAndTime}>
                                <div className={style.date}>17-04-2023</div>
                                <div className={style.time}>20:52</div>
                            </div>
                            <div className={style.content}>
                                Phần bình luận của sản phẩm vẫn đang trong quá trình phát triển, hứa hẹn sẽ làm xong
                                phần này trước kỳ thi cuối kỳ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment