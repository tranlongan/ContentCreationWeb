import style from './AllProducts.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import {useNavigate} from "react-router-dom";

function AllProducts() {

    const navigate = useNavigate()
    const objProducts = [
        {
            id: 0,
            imgSrc: "https://i.pinimg.com/564x/59/52/79/59527910186b8e2fdace0f8f358795c3.jpg",
            name: "Sản phẩm A",
            price: "350000",
            sold: "100"
        },
        {
            id: 1,
            imgSrc: "https://i.pinimg.com/564x/9f/aa/f2/9faaf2450ff2964e2ba292e3e05195fc.jpg",
            name: "Sản phẩm B",
            price: "450000",
            sold: "100"
        },
        {
            id: 3,
            imgSrc: "https://i.pinimg.com/564x/77/be/60/77be603f78fe9d8d97129974ccc50c34.jpg",
            name: "Sản phẩm C",
            price: "250000",
            sold: "100"
        },
        {
            id: 4,
            imgSrc: "https://i.pinimg.com/564x/90/86/ab/9086abc6e5c568f0ce83f69b83f47c36.jpg",
            name: "Sản phẩm D",
            price: "550000",
            sold: "100"
        },
        {
            id: 5,
            imgSrc: "https://i.pinimg.com/564x/cd/c9/8e/cdc98eb759778c6bdcf849d741989241.jpg",
            name: "Sản phẩm E",
            price: "650000",
            sold: "100"
        },
        {
            id: 6,
            imgSrc: "https://i.pinimg.com/564x/4a/9e/60/4a9e60b687372d9aed4959adbbf84df0.jpg",
            name: "Sản phẩm F",
            price: "750000",
            sold: "100"
        },
    ]
    return (
        <>
            <div className={style.products}>
                <div className={"row"}>
                    {
                        objProducts.map((data, index) => (
                            <div key={index} className={"col l4"}>
                                <div onClick={() => navigate(`/product/${data.name}`, {
                                    state: {
                                        id: data.id,
                                        name: data.name
                                    }
                                })}
                                     className={style.card}>
                                    <div className={style.header}>
                                        <img alt={"img product"}
                                             src={data.imgSrc}/>
                                        <div className={style.infoProduct}>
                                            <div className={style.title}>
                                                {data.name}
                                            </div>
                                            <div className={style.price}>
                                                {Intl.NumberFormat().format(data.price)}đ
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
                                            <div className={style.sold}>{data.sold} đã bán</div>
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

export default AllProducts