import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faStar} from "@fortawesome/free-regular-svg-icons";
import style from './Products.module.css'
import {useNavigate} from "react-router-dom";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useRef} from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {useState} from "react";
import axios from "axios";

function Products({idUser}) {
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
    const element_formPost = useRef()
    const [status, setStatus] = useState('none')
    const handleCloseForm = () => {
        setStatus('none')
    }

    const API_URl = "http://localhost:3001"
    const UPLOAD_ENDPOINT = "uploadImg";
    const [editorData, setEditorData] = useState({})

    function uploadAdapter(loader) {
        return {
            upload: () => {
                return new Promise((resolve, reject) => {
                    const body = new FormData();
                    loader.file.then((file) => {
                        body.append("image", file);
                        fetch(`${API_URl}/${UPLOAD_ENDPOINT}`, {
                            method: "post",
                            body: body
                        })
                            .then((res => res.json()))
                            .then((res) => {
                                resolve({default: `${API_URl}/${res.url}`})
                                console.log(res)
                            })
                            .catch((err) => {
                                reject(err);
                            })
                    })
                })
            }
        }
    }

    function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return uploadAdapter(loader);
        }
    }

    const [nameProduct, setNameProduct] = useState('')
    const element_illustration = useRef(null)
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [files, setFiles] = useState([])
    const [nameOption, setNameOption] = useState('')
    const [quantityOption, setQuantityOption] = useState('')
    const [options, setOptions] = useState([])
    const [dataForStoreCategories, setDataForStoreCategories] = useState([])
    const [storeCategory, setStoreCategory] = useState('')
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/dataForStoreCategories?idUser=${idUser}`)
            .then(res => {
                setDataForStoreCategories(res.data.dataForStoreCategories)
            })
    }, [idUser])

    useEffect(() => {
        axios.get(`http://localhost:3001/dataForProducts?idUser=${idUser}`)
            .then(res => {
                setProducts(res.data.dataForProducts)
            })
    }, [idUser])

    const handleAddOption = () => {
        if (nameOption === '' || quantityOption === '') {
            return
        } else {
            setOptions(data => [...data, {nameOption: nameOption, quantityOption: quantityOption}])
            setNameOption('')
            setQuantityOption('')
        }
    }
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const handleUploadProduct = async () => {
        const formData = new FormData()
        formData.append('nameProduct', nameProduct)
        formData.append('image', element_illustration.current.files[0])
        formData.append('idStoreCategory', storeCategory)
        formData.append('price', price)
        formData.append('quantity', quantity)
        formData.append('options', JSON.stringify(options))
        formData.append('content', editorData)
        files.forEach(file => {
            formData.append('images', file)
        })
        formData.append("day", day)
        formData.append("month", month)
        formData.append("year", year)
        const res = await axios.post(`http://localhost:3001/uploadProduct?idUser=${idUser}`, formData)
        const result = res.data
        if (result.msg === 'upload product success') {
            window.location.reload()
        }
    }

    const handleAppendInputOptionsProduct = () => {
        const element_div_options = document.createElement('div')
        element_div_options.classList = style.optionsProduct
        const inputNameOption = document.createElement('input')
        inputNameOption.placeholder = "Các tùy chọn của sản phẩm"
        inputNameOption.onchange = e => {
            setNameOption(e.target.value)
        }
        const inputQuantityOption = document.createElement('input')
        inputQuantityOption.placeholder = "Số lượng"
        inputQuantityOption.onchange = e => {
            setQuantityOption(e.target.value)
        }
        element_div_options.appendChild(inputNameOption)
        element_div_options.appendChild(inputQuantityOption)
        const element_div = document.getElementById('appendOptions')
        element_div.appendChild(element_div_options)
    }

    const handleFileChange = (e) => {
        setFiles([...e.target.files])
    }

    handleAddOption()

    return (
        <>
            <div className={style.navList}>
                <label>Phân loại</label>
                <select>
                    <option>Tất cả</option>
                    <option>Danh mục 1</option>
                    <option>Danh mục 2</option>
                </select>
                <button onClick={() => {
                    setStatus('block')
                }}>Thêm sản phẩm
                </button>
            </div>
            <div className={style.products}>
                <div className={"row"}>
                    {
                        products.map((data, index) => (
                            <div key={index} className={"col l3"}>
                                <div
                                    onClick={() => navigate(`/product/${data.name_product}?idUser=${data.id_user}&idProduct=${data.id_product}`, {
                                        state: {
                                            id: data.id,
                                            name: data.name
                                        }
                                    })}
                                    className={style.card}>
                                    <div className={style.header}>
                                        <img alt={"img product"}
                                             src={data.illustration_for_product}/>
                                        <div className={style.infoProduct}>
                                            <div className={style.title}>
                                                {data.name_product}
                                            </div>
                                            <div className={style.price}>
                                                {Intl.NumberFormat().format(data.price)}đ
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.footer}>
                                        <div className={style.category}>
                                            {
                                                data.name_store_category
                                            }
                                        </div>
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
                                        <i className={style.editProduct}><FontAwesomeIcon icon={faPenToSquare}/></i>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                status === 'block' &&
                <div className={style.modalAddProduct} ref={element_formPost}>
                    <div className={style.coating}>
                        <div onClick={() => handleCloseForm()} className={style.exitForm}><i><FontAwesomeIcon
                            icon={faXmark}/></i></div>
                        <div className={style.modal}>
                            <div className={style.titleModal}>Tạo bài viết</div>
                            <div style={{padding: "16px"}}>
                                <div className={style.titleArticle}>
                                    <input type={"text"} placeholder={"Tên sản phẩm"} value={nameProduct}
                                           onChange={e => setNameProduct(e.target.value)}/>
                                </div>
                                <div className={style.illustration}>
                                    <label>Ảnh minh họa:</label>
                                    <input type={"file"} ref={element_illustration}/>
                                </div>
                                <div className={style.storeCategories}>
                                    <select value={storeCategory} onChange={e => {
                                        setStoreCategory(e.target.value)
                                    }}>
                                        <option>Thể loại kinh doanh</option>
                                        {
                                            dataForStoreCategories.map((data, index) => (
                                                <option value={data.id_store_categories}
                                                        key={index}>{data.name_store_category}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className={style.price}>
                                    <input type={"text"} placeholder={"Giá tiền"} value={price}
                                           onChange={e => setPrice(e.target.value)}/>
                                </div>
                                <div>
                                    <div id="appendOptions"></div>
                                    <div className={style.btnAddOption} onClick={handleAppendInputOptionsProduct}>
                                        + Các option của sản phẩm
                                    </div>
                                </div>

                                <div className={style.quantity}>
                                    <input type={"text"} placeholder={"Số lượng"} value={quantity}
                                           onChange={e => setQuantity(e.target.value)}/>
                                </div>
                                <div className={style.content}>
                                    <CKEditor
                                        config={{
                                            extraPlugins: [uploadPlugin]
                                        }}
                                        editor={ClassicEditor}
                                        data="Mô tả về sản phẩm"
                                        onReady={editor => {
                                            console.log('Editor is ready to use!', editor);
                                        }}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setEditorData(data)
                                            console.log({event, editor, data});
                                        }}
                                        onBlur={(event, editor) => {
                                            console.log('Blur.', editor);
                                        }}
                                        onFocus={(event, editor) => {
                                            console.log('Focus.', editor);
                                        }}/>
                                </div>
                                <div className={style.imgDescribe}>
                                    <label>Ảnh mô tả sản phẩm</label>
                                    <input type={"file"} multiple={true} onChange={handleFileChange}/>
                                </div>
                                <div className={style.btnPost}>
                                    <button className={"btn--outline__warning"}
                                            onClick={handleUploadProduct}>Thêm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Products