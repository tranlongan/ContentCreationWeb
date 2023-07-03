import style from './ReviewAndEvaluation.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";

function ReviewAndEvaluation({children}) {
    const [check, setCheck] = useState(0);
    useEffect(() => {

    })
    return (<>
        <div className={style.reviewAndEvaluation}>
            <div className={style.title}>ĐÁNH GIÁ SẢN PHẨM</div>
            <div className={style.evaluation}>
                <div className={style.currentRating}>
                    <label>4.9 trên 5</label>
                    <div className={style.icons}>
                        <i><FontAwesomeIcon icon={faStar}/></i>
                        <i><FontAwesomeIcon icon={faStar}/></i>
                        <i><FontAwesomeIcon icon={faStar}/></i>
                        <i><FontAwesomeIcon icon={faStar}/></i>
                        <i><FontAwesomeIcon icon={faStar}/></i>
                    </div>
                </div>
                <div className={style.navBtn}>
                    <div className={check === 0 ? style.active : ""} onClick={() => {
                        setCheck(0)
                    }}>TẤT CẢ
                    </div>
                    <div className={check === 5 ? style.active : ""} onClick={() => {
                        setCheck(5)
                    }}>5 Sao
                    </div>
                    <div className={check === 4 ? style.active : ""} onClick={() => {
                        setCheck(4)
                    }}>4 Sao
                    </div>
                    <div className={check === 3 ? style.active : ""} onClick={() => {
                        setCheck(3)
                    }}>
                        3 Sao
                    </div>
                    <div className={check === 2 ? style.active : ""} onClick={() => {
                        setCheck(2)
                    }}>2 Sao
                    </div>
                    <div className={check === 1 ? style.active : ""} onClick={() => {
                        setCheck(1)
                    }}>1 Sao
                    </div>
                </div>
            </div>
            <div className={style.comments}>
                {children}
            </div>
        </div>
    </>)
}

export default ReviewAndEvaluation