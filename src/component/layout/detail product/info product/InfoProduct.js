import style from './InfoProduct.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

function InfoProduct() {
    return (
        <>
            <div className={style.infoProduct}>
                <div className={style.title}>CHI TIẾT SẢN PHẨM</div>
                <div className={style.detail}>
                    <div className={style.card}>
                        <label>Danh mục</label>
                        <div className={style.content}>
                            <ul className={style.nav}>
                                <li>DIY<i><FontAwesomeIcon icon={faChevronRight}/></i></li>
                                <li>Thiết bị điện tử<i><FontAwesomeIcon icon={faChevronRight}/></i></li>
                                <li>Headphone<i><FontAwesomeIcon icon={faChevronRight}/></i></li>
                                <li>Sản phẩm A</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.card}>
                        <label>Thương hiệu</label>
                        <div className={style.trademark}>
                            Thương hiệu A
                        </div>
                    </div>
                    <div className={style.card}>
                        <label>Kho hàng</label>
                        <div className={style.content}>
                            9
                        </div>
                    </div>
                    <div className={style.card}>
                        <label>Gửi từ</label>
                        <div>
                            TP.Hồ Chí Minh
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoProduct