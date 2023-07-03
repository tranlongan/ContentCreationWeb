import style from './Introduce.module.css'
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCameraRetro, faXmark} from "@fortawesome/free-solid-svg-icons";
import {faImage} from "@fortawesome/free-regular-svg-icons";

function Introduce({id}) {
    const myId = localStorage.getItem('user')
    const [dataForProfile, setDataForProfile] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3001/dataForProfile?idUser=${id}`)
            .then(res => {
                setDataForProfile(res.data.dataForProfile)
            })
    }, [id])

    const element_formChangeAvatarAndBackground = useRef(null)
    const element_inputAvatar = useRef(null)
    const [imgSrc, setImgSrc] = useState(null)
    const [status, setStatus] = useState('')

    const handleAppendForm = (field) => {
        element_formChangeAvatarAndBackground.current.style.display = "block"
        setStatus(field)
    }
    const handleCloseForm = () => {
        element_formChangeAvatarAndBackground.current.style.display = "none"
        window.location.reload()
    }

    const handleUpdateSrcImg = e => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.addEventListener("load", (e) => {
            setImgSrc(e.target.result)
        })
        reader.readAsDataURL(file)
    }

    const handleUpdateImg = async () => {
        const formData = new FormData()
        formData.append('idUser', id)
        formData.append('image', element_inputAvatar.current.files[0])
        let result;
        if (status === 'change_avatar') {
            const res = await axios.post('http://localhost:3001/updateAvatar', formData)
            result = res.data
        } else if (status === 'change_background') {
            const res = await axios.post('http://localhost:3001/updateBackground', formData)
            result = res.data
        }
        if (result.msg !== ''){
            window.location.reload()
        }
    }
    return (
        <>
            <div className={style.divBorder}>
                <div className={style.introduceYourself}>
                    <div className={style.review}
                         style={status === 'change_background' ? (imgSrc ? {backgroundImage: `url(${imgSrc})`} : {backgroundImage: `url(${dataForProfile[0]?.background})`}) : ({backgroundImage: `url(${dataForProfile[0]?.background})`})}>
                        <div className={style.coating}>
                            {
                                id === myId &&
                                <div className={style.changeBackground}
                                     onClick={() => handleAppendForm('change_background')}>
                                    <i><FontAwesomeIcon icon={faImage}/></i>
                                </div>
                            }
                            <div className={"wide"}>
                                <div className={style.infoUser}>
                                    <div className={style.avatar}>
                                        <img alt={"avatar user"}
                                             src={status === 'change_avatar' ? (imgSrc ? imgSrc : `${dataForProfile[0]?.avatar}`) : (`${dataForProfile[0]?.avatar}`)}/>
                                        {
                                            id === myId &&
                                            <div className={style.changeAvatar}
                                                 onClick={() => handleAppendForm('change_avatar')}>
                                                <i><FontAwesomeIcon icon={faCameraRetro}/></i>
                                            </div>
                                        }
                                    </div>

                                    <div className={style.info}>
                                        <div className={style.nameUser}>{dataForProfile[0]?.username}</div>
                                        <div className={style.follow}>
                                            <button className={"btn__around"}>Theo dõi</button>
                                            <label>1.234.567 lượt theo dõi</label>
                                        </div>
                                        <div className={style.description}>
                                            {dataForProfile[0]?.introduce_yourself === '' &&
                                                <p>Không có bản giới thiệu nào ở đây, hãy giới thiệu bản thân bạn</p>}
                                            {dataForProfile[0]?.introduce_yourself !== '' &&
                                                <p>{dataForProfile[0]?.introduce_yourself}</p>}
                                        </div>
                                        {
                                            dataForProfile[0]?.introduce_yourself === '' &&
                                            <div className={style.more}>
                                                Bổ sung >>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.formChangeAvatarAndBackground} ref={element_formChangeAvatarAndBackground}>
                <div className={style.coating}>
                    <div onClick={() => handleCloseForm()} className={style.exitForm}><i><FontAwesomeIcon
                        icon={faXmark}/></i></div>
                    <div className={style.card}>
                        <div className={style.header}>
                            <input type={"file"} onChange={handleUpdateSrcImg} ref={element_inputAvatar}/>
                            {
                                imgSrc &&
                                <img alt={"avatar"} src={imgSrc}/>
                            }

                        </div>
                        <div className={style.footer}>
                            <button className={"btn--outline__warning"} onClick={handleUpdateImg}>Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduce