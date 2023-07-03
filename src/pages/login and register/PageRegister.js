import style from "./PageLoginAndRegister.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

function PageRegister() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")

    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidUsername, setIsValidUsername] = useState(true);
    const [isValidYear, setIsValidYear] = useState(true);
    const [isValidPass, setIsValidPass] = useState(true);
    const [isValidRePass, setIsValidRedPass] = useState(true);

    // chuỗi có chứa ký tự đặc biệt
    const hasSpecialChar = (value) => {
        return /[^a-zA-Z0-9]/.test(value)
    }

    // có phải là chữ
    const isLetter = (value) => {
        return /^[a-zA-Z\W]+$/.test(value)
    }

    const isEmpty = (data) => {
        if (data === "" || data === null || data === undefined) {
            return true
        }
        if (Array.isArray(data) && data.length === 0) {
            return true
        }
        if (typeof data === 'object') {
            for (const dataKey in data) {
                if (isEmpty(data[dataKey])) {
                    return true
                }
            }
        }
        return false
    }

    const dataRegister = {
        email: email,
        username: username,
        day: day,
        month: month,
        year: year,
        phone: phone,
        password: password
    }

    const registerAccount = async (url, data) => {
        if (isEmpty(data)) {
            return;
        } else {
            try {
                const res = await axios.post(url, data)
                const result = res.data
                if (result.msg === 'register success') {
                    alert('Thông tin chú em đăng ký ok rồi đấy, lết qua trang login nhé')
                    navigate('/login?onlyLogin=true', {replace: true})
                } else if (result.msg === 'email already exists') {
                    alert('Email đã có chủ rồi bạn à')
                }
            } catch (e) {
                console.log(e)
            }
        }

    }
    return (
        <>
            <div className={style.card}>
                <div className={style.title}>Đăng ký</div>
                <div className={style.divInput}>
                    <div className={style.email}>
                        <input type={"email"} placeholder={"Email"} value={email}
                               onChange={e => {
                                   setEmail(e.target.value)
                                   let emailRegex = /^(?!.*\s)(?![@.])(?=[^@]*@[^@]*$)(?=[^@]{6,})(?=[^@]*[a-zA-Z]).*[@].*$/g;
                                   setIsValidEmail(emailRegex.test(e.target.value))
                               }}/>
                    </div>
                    {(isValidEmail === false && email !== "") &&
                        <p style={{color: "#f85555"}}>Địa chỉ email không hợp lệ</p>}
                    <div className={style.username}>
                        <input type={"text"} placeholder={"Tên tài khoản"} value={username}
                               onChange={e => {
                                   setUsername(e.target.value)
                                   let usernameRegex = /^(?!\s)(?!.*\s$)(?!\d)[\w\W]*$/g;
                                   setIsValidUsername(usernameRegex.test(e.target.value))
                               }}/>
                    </div>
                    {(isValidUsername === false && username !== "") &&
                        <p style={{color: "#f85555"}}>Tên không hợp lệ</p>}
                    <div className={style.birthday}>
                        <div className={style.listInput}>
                            <input type={"text"} placeholder={"Ngày"} value={day}
                                   onChange={e => {
                                       if (isLetter(e.target.value)) {
                                           e.preventDefault()
                                       } else if (hasSpecialChar(e.target.value)) {
                                           e.preventDefault()
                                       } else {
                                           if (e.target.value === "") {
                                               setDay(e.target.value.slice(0, 2))
                                           } else if (e.target.value < 1 || e.target.value > 31) {
                                               e.preventDefault()
                                           } else {
                                               setDay(e.target.value.slice(0, 2))
                                           }
                                       }
                                   }}/>
                            <input type={"text"} placeholder={"Tháng"} value={month}
                                   onChange={e => {
                                       if (isLetter(e.target.value)) {
                                           e.preventDefault()
                                       } else if (hasSpecialChar(e.target.value)) {
                                           e.preventDefault()
                                       } else {
                                           if (e.target.value === "") {
                                               setMonth(e.target.value.slice(0, 2))
                                           } else if (e.target.value < 1 || e.target.value > 12) {
                                               e.preventDefault()
                                           } else {
                                               setMonth(e.target.value.slice(0, 2))
                                           }
                                       }
                                   }}/>
                            <input type={"text"} placeholder={"Năm"} value={year}
                                   onChange={e => {
                                       setYear(e.target.value);
                                       setIsValidYear(e.target.value >= 1920 && e.target.value <= 2023);
                                   }}/>
                        </div>
                    </div>
                    {(isValidYear === false && year !== "") &&
                        <p style={{color: "#f85555"}}>Năm không hợp lệ</p>}
                    <div className={style.phone}>
                        <input type={"text"} placeholder={"Số điện thoại"}
                               value={phone}
                               onChange={e => {
                                   if (isLetter(e.target.value)) {
                                       e.preventDefault()
                                   } else {
                                       setPhone(e.target.value.slice(0, 10))
                                   }
                               }}/>
                    </div>
                    <div className={style.password}>
                        <input type={"password"} placeholder={"Mật khẩu"} value={password}
                               onChange={e => {
                                   setPassword(e.target.value.slice(0, 32));
                                   let passwordRegex = /^[^ ,./<>?;':"[\]{}+=-]+$/;
                                   setIsValidPass(passwordRegex.test(e.target.value));
                               }}/>
                    </div>
                    {(isValidPass === false && password !== "") &&
                        <p style={{color: "#f85555"}}>Mật khẩu không hợp lệ</p>}
                    <div className={style.password}>
                        <input type={"password"} placeholder={"Nhập lại mật khẩu"} value={rePassword}
                               onChange={e => {
                                   setRePassword(e.target.value.slice(0, 32))
                                   setIsValidRedPass(e.target.value === password)
                               }}/>
                    </div>
                    {(isValidRePass === false && rePassword !== "") &&
                        <p style={{color: "#f85555"}}>Mật khẩu không trùng</p>}
                </div>
                <div className={style.buttons}></div>

                {(email === '' || username === '' || phone === '' || day === '' || month === '' || year === '' || password === '' || rePassword === '') &&
                    <p style={{color: "#f85555"}}>Không được để trống bro à</p>}
                <div className={style.btnLogin}>
                    <button onClick={() => {
                        registerAccount('http://localhost:3001/register', dataRegister)
                    }}>
                        <i><FontAwesomeIcon icon={faArrowRight}/></i>
                    </button>
                </div>
                <div className={style.another}>
                    <div className={style.btnRegister} onClick={() => {
                        navigate('/login', {replace: true})
                    }}>BẠN ĐÃ CÓ SẴN TÀI KHOẢN?
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageRegister