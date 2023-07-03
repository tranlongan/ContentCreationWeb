import style from './Content.module.css'
import {useCallback, useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Content({idUser, idProduct}) {

    const objSlides = [
        {id: 0, srcImg: "https://i.pinimg.com/564x/c5/72/65/c57265a2c71bb1638dd688939290db84.jpg"},
        {id: 1, srcImg: "https://i.pinimg.com/564x/c0/09/b5/c009b54ba1199d95d11f43becf38b1f3.jpg"},
        {id: 2, srcImg: "https://i.pinimg.com/564x/6e/5d/c4/6e5dc4027cd8bbfd17a8181fa635d03a.jpg"},
        {id: 3, srcImg: "https://i.pinimg.com/564x/f4/81/17/f481178977607ae86944fe2a350c93f1.jpg"},
        {id: 4, srcImg: "https://i.pinimg.com/564x/b6/d3/3d/b6d33da62b5882951ac70682d01208fd.jpg"},
        {id: 5, srcImg: "https://i.pinimg.com/564x/84/06/ff/8406ffde5791e623b9225efcb914ba2c.jpg"},
        {id: 6, srcImg: "https://i.pinimg.com/564x/e5/b4/2b/e5b42bfedc36fee4250db0c27723ac6e.jpg"},
    ]
    const objVariation = [
        {id: 0, name: "A"},
        {id: 1, name: "B"},
    ]
    const refIllustration = useRef(null)
    const [slideIndex, setSlideIndex] = useState('');
    const [imgDefault, setImgDefault] = useState("")
    const [tagIndex, setTagIndex] = useState("")
    const [variations, setVariations] = useState([])
    const [dataForProduct, setDataForProduct] = useState([])
    const [quantityProduct, setQuantityProduct] = useState('')
    const [arrImgDescription, setArrImgDescription] = useState([])

    const choiceImg = useCallback((srcImg) => (e) => {
        setImgDefault(srcImg)
        setSlideIndex(srcImg)
    }, [])
    useEffect(() => {
        axios.get(`http://localhost:3001/dataForProduct?idProduct=${idProduct}`)
            .then(res => {
                setDataForProduct(res.data.dataForProduct)
                setVariations(res.data.variations)
                setArrImgDescription(res.data.arrImgDescription)
                setQuantityProduct(res.data.dataForProduct[0].quantity_product)
            })
    }, [idProduct])
    return (
        <>
            <div className={style.content}>
                <div className={"row"}>
                    <div className={"col l5"}>
                        <div className={style.listImg}>
                            <div className={style.header}
                                 style={imgDefault !== "" ? {backgroundImage: `url(${imgDefault})`} : {backgroundImage: `url(${arrImgDescription[0]})`}}></div>
                            <div className={style.footer}>
                                <div className={style.slider}>
                                    <div className={style.slides} ref={refIllustration}>
                                        {
                                            arrImgDescription.map((data, index) => (
                                                <div key={index} itemID={data}
                                                     className={slideIndex === data ? `${style.illustration} ${style.active}` : style.illustration}
                                                     style={{backgroundImage: `url(${data})`}}
                                                     onClick={choiceImg(data)}></div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col l7"}>
                        <div className={style.title}>
                            {dataForProduct[0]?.name_product}
                        </div>
                        <div className={style.orderInformation}>
                            <div className={style.evaluate}>
                                <ul className={style.nav}>
                                    <li>
                                        <div className={style.pointEvaluation}>4.9</div>
                                        <div className={style.listIcon}>
                                            <i><FontAwesomeIcon icon={faStar}/></i>
                                            <i><FontAwesomeIcon icon={faStar}/></i>
                                            <i><FontAwesomeIcon icon={faStar}/></i>
                                            <i><FontAwesomeIcon icon={faStar}/></i>
                                            <i><FontAwesomeIcon icon={faStar}/></i>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={style.pointEvaluation}>910</div>
                                        <label>Đánh giá</label></li>
                                    <li>
                                        <div className={style.quantitySold}>32k</div>
                                        <label>Đã bán</label></li>
                                </ul>
                            </div>
                            <div className={style.price}>
                                {Intl.NumberFormat().format(dataForProduct[0]?.price)}đ
                            </div>
                            <div className={style.variation}>
                                <label>Variation</label>
                                <div className={style.tags}>
                                    {
                                        variations.map((data, index) => (
                                            <div key={index} onClick={() => {
                                                setTagIndex(data.nameOption)
                                                setQuantityProduct(data.quantityOption)
                                            }}
                                                 className={tagIndex === data.nameOption ? `${style.tagActive} ${style.tag}` : `${style.tag}`}>{data.nameOption}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={style.quantity}>
                                <label>Số lượng</label>
                                <div>-</div>
                                <input type={"number"}/>
                                <div>+</div>
                                <p className={style.productsAvailable}>{quantityProduct} sản phẩm có sẵn</p>
                            </div>
                            <div className={style.listBtn}>
                                <button className={"btn--outline__warning"}>Thêm vào giỏ hàng</button>
                                <button className={"btn__warning"}>Mua ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content