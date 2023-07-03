import style from "./Header.module.css"
import "../../../css default/button.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRightFromBracket, faArrowUpFromBracket,
    faCartShopping,
    faGears,
    faMagnifyingGlass,
    faShop, faXmark
} from "@fortawesome/free-solid-svg-icons";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Header({id}) {
    const [isLogin, setIsLogin] = useState(true)
    const [dataForHeader, setDataForHeader] = useState({});

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        setIsLogin(id !== null)
        axios.get(`http://localhost:3001/dataForHeader?idUser=${id}`)
            .then(res => {
                setDataForHeader(res.data.dataForHeader)
            })
    }, [id])

    const element_formPost = useRef(null)
    const element_coating = useRef(null)
    const handleAppendForm = () => {
        element_formPost.current.style.display = 'block'
    }
    const handleCloseForm = () => {
        element_formPost.current.style.display = 'none'
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

    const [materials, setMaterials] = useState([])
    const [materialInputValue, setMaterialInputValue] = useState('')
    const [whereBuyInputValue, setWhereBuyInputValue] = useState('')

    const handleAddMaterials = () => {
        if (materialInputValue === '' || whereBuyInputValue === '') {
            return
        }
        setMaterials([...materials, {material: materialInputValue, whereBuy: whereBuyInputValue}]);
        setMaterialInputValue('');
        setWhereBuyInputValue('');
    }

    const handleAppend = async () => {
        const element_materials = document.createElement('div')
        element_materials.classList = style.materials
        const element_nameMaterial = document.createElement('input')
        element_nameMaterial.classList = style.nameMaterial
        element_nameMaterial.placeholder = 'Tên vật liệu'
        element_nameMaterial.value = materialInputValue
        element_nameMaterial.onchange = e => {
            setMaterialInputValue(e.target.value)
        }
        element_materials.appendChild(element_nameMaterial)
        const element_whereBuy = document.createElement('input')
        element_whereBuy.classList = style.whereBuy
        element_whereBuy.placeholder = 'Nơi mua'
        element_whereBuy.value = whereBuyInputValue
        element_whereBuy.onchange = e => {
            setWhereBuyInputValue(e.target.value)
        }
        element_materials.appendChild(element_whereBuy)
        const a = document.getElementById('appendMaterials')
        a.appendChild(element_materials)
    }

    handleAddMaterials()

    const [titleArticle, setTitleArticle] = useState('')
    const element_illustration = useRef(null)
    const [tags, setTags] = useState('')
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()

    const handleUploadArticle = async (url) => {
        const formData = new FormData()
        formData.append('idUser', id)
        formData.append('titleArticle', titleArticle)
        formData.append('image', element_illustration.current.files[0])
        formData.append('tags', tags)
        formData.append('editorData', editorData)
        formData.append('materials', JSON.stringify(materials))
        formData.append('day', day)
        formData.append('month', month)
        formData.append('year', year)
        if (titleArticle === '' || element_illustration.current.files[0] === '' || tags === '') {
            return
        } else {
            const res = await axios.post(url, formData)
            const result = res.data
            if (result.msg === 'upload success') {
                alert('Đăng bài thành công, đang chờ xét duyệt')
                window.location.reload()
            }
        }
    }
    return (
        <>
            <div className={style.navbar}>
                <div className={style.navbarLogo} onClick={() => {
                    navigate('/', {replace: true})
                }}>
                    <img alt="logo" className={style.navbarLogoImage} src='/logo/logo.png'/>
                    <div className={style.navbarLogoName}>DIY</div>
                </div>
                <div className={style.navSearch}>
                    <input placeholder="Tìm kiếm"/>
                    <div className={style.iconNavSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </div>
                </div>
                {
                    !isLogin &&
                    <div className={style.navbarList}>
                        <button onClick={() => {
                            navigate('/login', {state: {key: location.pathname, query: location.search}})
                        }}
                                className="btn__info">Đăng nhập
                        </button>
                        <label>Bạn chưa có tài khoản ư?</label>
                    </div>
                }
                {
                    isLogin &&
                    <div className={style.navbarList}>
                        <div className={style.upload} onClick={() => {
                            handleAppendForm()
                        }}>
                            <i><FontAwesomeIcon icon={faArrowUpFromBracket}/></i><label>Tải lên</label>
                        </div>
                        <div className={style.cart}>
                            <i><FontAwesomeIcon icon={faCartShopping}/></i>
                            <div className={style.amountProducts}>2</div>
                            <div className={style.productsInCart}>
                                <div className={style.title}>
                                    Sản phẩm đã thêm
                                </div>
                                <div className={style.product}>
                                    <img alt={"img product"}
                                         src={"https://i.pinimg.com/564x/af/ec/d7/afecd7e3820a817bc6c0b138e3b00143.jpg"}/>
                                    <div className={style.nameProduct}>Sản phẩm A</div>
                                    <div className={style.price}>{Intl.NumberFormat().format(200000)}đ</div>
                                </div>
                                <div className={style.product}>
                                    <img alt={"img product"}
                                         src={"https://i.pinimg.com/564x/af/ec/d7/afecd7e3820a817bc6c0b138e3b00143.jpg"}/>
                                    <div className={style.nameProduct}>Sản phẩm A</div>
                                    <div className={style.price}>{Intl.NumberFormat().format(200000)}đ</div>
                                </div>
                                <div className={style.product}>
                                    <img alt={"img product"}
                                         src={"https://i.pinimg.com/564x/af/ec/d7/afecd7e3820a817bc6c0b138e3b00143.jpg"}/>
                                    <div className={style.nameProduct}>Sản phẩm A</div>
                                    <div className={style.price}>{Intl.NumberFormat().format(200000)}đ</div>
                                </div>
                                <div className={style.viewCart}>
                                    <button className={"btn__warning"}>Xem giỏ hàng</button>
                                </div>
                            </div>
                        </div>
                        <div className={style.infoUser}>
                            <img alt={"avatar"}
                                 src={dataForHeader[0]?.avatar}/>
                            <label>{dataForHeader[0]?.username}</label>
                            <div className={style.userOptions}>
                                <div onClick={() => {
                                    navigate(`/profile/${dataForHeader[0]?.username}?id=${dataForHeader[0]?.id_account}`)
                                }}>
                                    <i><FontAwesomeIcon icon={faUser}/></i><label>Xem hồ sơ</label>
                                </div>
                                <div
                                    onClick={() => navigate(`/storeManagement/${dataForHeader[0]?.username}?id=${dataForHeader[0]?.id_account}&storeRegistered=${dataForHeader[0]?.is_store_registered}`)}>
                                    <i><FontAwesomeIcon icon={faShop}/></i><label>Cửa hàng của tôi</label>
                                </div>
                                <div>
                                    <i><FontAwesomeIcon icon={faGears}/></i><label>Cài đặt</label>
                                </div>
                                <div onClick={() => {
                                    localStorage.removeItem('user')
                                    window.location.reload()
                                }}>
                                    <i><FontAwesomeIcon icon={faArrowRightFromBracket}/></i><label>Đăng xuất</label>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className={style.formPost} ref={element_formPost}>
                <div onClick={() => handleCloseForm()} className={style.exitForm}><i><FontAwesomeIcon
                    icon={faXmark}/></i></div>
                <div className={style.coating} ref={element_coating}>
                    <div className={style.card}>
                        <div className={style.titleCard}>Tạo bài viết</div>
                        <div style={{padding: "16px"}}>
                            <div className={style.titleArticle}>
                                <input type={"text"} placeholder={"Tiêu đề bài viết"} value={titleArticle}
                                       onChange={e => setTitleArticle(e.target.value)}/>
                            </div>
                            <div className={style.illustration}>
                                <label>Ảnh minh họa:</label>
                                <input type={"file"} ref={element_illustration}/>
                            </div>
                            <div className={style.tags}>
                                <input type={"text"} placeholder={"#Tags"} value={tags}
                                       onChange={e => setTags(e.target.value)}/>
                            </div>
                            <div className={style.content}>
                                <CKEditor
                                    config={{
                                        extraPlugins: [uploadPlugin]
                                    }}
                                    editor={ClassicEditor}
                                    data=""
                                    onReady={editor => {
                                        // You can store the "editor" and use when it is needed.
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
                            <div className={style.appendMaterials}>
                                <div id="appendMaterials"></div>
                                <div className={style.materialsUsed} onClick={handleAppend}>
                                    + Vật liệu đã sử dụng
                                </div>
                                <div className={style.btnPost} onClick={() => {
                                    handleUploadArticle('http://localhost:3001/uploadArticle')
                                }}>
                                    <button className={"btn--outline__warning"}>ĐĂNG</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header