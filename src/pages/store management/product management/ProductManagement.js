import style from './ProductMangement.module.css'
import Products from "./products/Products";

function ProductManagement({idUser}) {
    return (
        <>
            <div className={style.productManagement}>
                <Products idUser={idUser}/>
            </div>
        </>
    )
}

export default ProductManagement