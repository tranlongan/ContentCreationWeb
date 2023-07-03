import style from './Footer.module.css'
import {useEffect, useState} from "react";
import axios from "axios";

function Footer({idUser, status, valueCategory, idCategory}) {
    const [inputCategoryValue, setInputCategoryValue] = useState('')
    const [inputEditCategoryValue, setEditInputCategoryValue] = useState('')
    useEffect(()=>{
        setEditInputCategoryValue(valueCategory)
    },[valueCategory])
    const handleUpdateCategories = () => {
        if (inputCategoryValue === '') {
            return
        } else {
            axios.post(`http://localhost:3001/updateCategoriesOfStore?idUser=${idUser}`, {inputCategoryValue})
                .then(res => {
                    if (res.data.msg === 'update success') {
                        window.location.reload()
                    }
                })
        }
    }

    const handleEditCategory = () =>{
        if (inputEditCategoryValue === '') {
            return
        }else {
            axios.post(`http://localhost:3001/editCategoryOfStore?idCategory=${idCategory}`, {inputEditCategoryValue})
                .then(res => {
                    if (res.data.msg === 'edit success') {
                        window.location.reload()
                    }
                })
        }
    }
    return (
        <>
            <div className={style.footer}>
                {
                    status === 'add' &&
                    <>
                        <input type={"text"} placeholder={"Thêm danh mục"} value={inputCategoryValue}
                               onChange={e => setInputCategoryValue(e.target.value)}/>
                        <button onClick={handleUpdateCategories}>Thêm</button>
                    </>
                }
                {
                    status === 'edit' &&
                    <>
                        <input type={"text"} placeholder={"Sửa danh mục"} value={inputEditCategoryValue}
                               onChange={e => setEditInputCategoryValue(e.target.value)}/>
                        <button onClick={handleEditCategory}>Sửa</button>
                    </>
                }
            </div>
        </>
    )
}

export default Footer