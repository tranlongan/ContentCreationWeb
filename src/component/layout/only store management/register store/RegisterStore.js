import style from "./RegisterStore.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function RegisterStore({idUser}) {
    const navigate = useNavigate()
    const [nameStore, setNameStore] = useState('')
    const [citizenId, setCitizenId] = useState('')
    const [description, setDescription] = useState('')
    const [businessCategory, setBusinessCategory] = useState('')
    const [isValidNameStore, setIsValidNameStore] = useState(true)
    const [isValidCitizenId, setIsValidCitizenId] = useState(true)
    const wordCount = description.length
    const MAX_WORD_COUNT = 200
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()
    const data = {
        idUser: idUser,
        nameStore: nameStore,
        citizenId: citizenId,
        description: description,
        businessCategory: businessCategory,
        day: day,
        month: month,
        year: year
    }
    const isEmpty = (data) => {
        if (data === '' || data === undefined || null) {
            return true
        } else if (Array.isArray(data) && data.length === 0) {
            return true
        }
        if (typeof data === 'object') {
            for (const dataKey in data) {
                if (isEmpty(data[dataKey])) {
                    return true
                }
            }
        }
        return false;
    }
    const handleRegisterStore = async (url, data) => {
        if (isEmpty(data)) {
            return
        } else {
            const res = await axios.post(url, data)
            const result = res.data
            if (result.msg === 'store register success') {
                navigate(`/storeManagement/norman?id=${idUser}&storeRegistered=1`, {replace: true})
            } else if (result.msg === 'store registered') {
                alert('Tài khoản này đã đăng ký cửa hàng rồi, không cần đăng ký nữa')
                navigate(`/storeManagement/norman?id=${idUser}&storeRegistered=1`, {replace: true})
            }
        }
    }
    return (
        <>
            <div className={style.coating}>
                <div className={style.card}>
                    <div className={style.title}>Đăng ký cửa hàng</div>
                    <div className={style.divInput}>
                        <div className={style.nameStore}>
                            <input type={"text"} placeholder={"Tên cửa hàng"} value={nameStore}
                                   onChange={e => {
                                       setNameStore(e.target.value)
                                       let usernameRegex = /^(?!\s)(?!.*\s$)(?!\d)[\w\W]*$/g;
                                       setIsValidNameStore(usernameRegex.test(e.target.value))
                                   }}/>
                        </div>
                        {(isValidNameStore === false && nameStore !== "") &&
                            <p style={{color: "#f85555"}}>Tên không hợp lệ</p>}
                        <div className={style.citizenId}>
                            <input type={"text"} placeholder={"Căn cước công dân"} value={citizenId}
                                   onChange={e => {
                                       setCitizenId(e.target.value.slice(0, 12))
                                       let citizenIdRegex = /^[0-9]*$/;
                                       setIsValidCitizenId(citizenIdRegex.test(e.target.value))
                                   }}/>
                        </div>
                        {(isValidCitizenId === false && citizenId !== "") &&
                            <p style={{color: "#f85555"}}>Căn cước công dân không hợp lệ</p>}
                        <div className={style.description}>
                            <textarea value={description} placeholder={"Mô tả cửa hàng"}
                                      onChange={e => {
                                          const wordCount = description.length
                                          if (e.target.value.length > 0 && !/^[^\s\W]/.test(e.target.value)) {
                                              e.preventDefault()
                                          } else {
                                              if (wordCount <= MAX_WORD_COUNT) {
                                                  setDescription(e.target.value.slice(0, MAX_WORD_COUNT))
                                              }
                                          }

                                      }}></textarea>
                            <div className={style.countWord}>{wordCount + "/" + MAX_WORD_COUNT}</div>
                        </div>
                        <div className={style.category}>
                            <select value={businessCategory} onChange={e => setBusinessCategory(e.target.value)}>
                                <option>Thể loại kinh doanh</option>
                                <option value={"Thời đang"}>Thời đang</option>
                                <option value={"Thiết bị điện tử"}>Thiết bị điện tử</option>
                                <option value={"Nhà sách"}>Nhà sách</option>
                            </select>
                        </div>

                    </div>
                    <div className={style.btnRegister}>
                        <button onClick={() => handleRegisterStore('http://localhost:3001/registerStore', data)}>
                            <i><FontAwesomeIcon icon={faArrowRight}/></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterStore