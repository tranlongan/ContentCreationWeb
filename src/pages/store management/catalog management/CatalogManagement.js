import style from './CatalogManagement.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrashCan} from "@fortawesome/free-regular-svg-icons";
import Footer from "./footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";

function CatalogManagement({idUser}) {
    const [dataForCatalogManagement, setDataForCatalogManagement] = useState([])
    const [status, setStatus] = useState('add')
    const [valueCategory, setValueCategory] = useState('')
    const [idCategory, setIdCategory] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:3001/dataForStoreManagement?idUser=${idUser}`)
            .then(res => {
                setDataForCatalogManagement(res.data.dataForStoreManagement)
            })
    }, [idUser])

    const handleAppendEditCategory = () => {
        setStatus('edit')
    }
    return (
        <>
            <div className={style.catalogManagement}>
                <table className={style.tableCatalog}>
                    <tbody>
                    <tr>
                        <th>STT</th>
                        <th>Mặt hàng kinh doanh</th>
                        <th></th>
                    </tr>
                    {
                        dataForCatalogManagement?.map((data, index) => (
                            <tr key={index}>
                                <td>{data.id_store_categories}</td>
                                <td>{data.name_store_category}</td>
                                <td>
                                    <i onClick={() => {
                                        handleAppendEditCategory()
                                        setValueCategory(data.name_store_category)
                                        setIdCategory(data.id_store_categories)
                                    }}><FontAwesomeIcon icon={faPenToSquare}/></i>
                                    <i onClick={() => {
                                        alert("xóa: " + data.id_store_categories)
                                    }}><FontAwesomeIcon icon={faTrashCan}/></i>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <Footer idUser={idUser} status={status} valueCategory={valueCategory} idCategory={idCategory}/>
        </>
    )
}

export default CatalogManagement