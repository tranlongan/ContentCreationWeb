import style from './PageLoginAndRegister.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function PageLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isValidPass, setIsValidPass] = useState(true)
    const [isValid, setIsValid] = useState(true)

    const navigate = useNavigate()
    const location = useLocation()

    const data = {
        email: email,
        password: password
    }
    const isEmpty = (data) => {
        if (data === '' || data === null || data === undefined) {
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
        return false
    }

    const login = async (url, data) => {
        if (isEmpty(data)) {
            return
        } else {
            try {
                const res = await axios.post(url, data)
                const result = res.data
                if (result.msg === 'no account yet') {
                    setIsValid(false)
                } else {
                    if (location.state.key === undefined || location.state.key === null || location.state.key === '') {
                        navigate('/?type=private', {replace: true})
                    } else {
                        navigate(`${location.state.key}${location.state.query}`, {replace: true})
                    }
                    localStorage.setItem('user', JSON.stringify(result.id))
                }
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (<>
        <div className={style.card}>
            <div className={style.title}>Đăng nhập</div>
            <div className={style.divInput}>
                <div className={style.email}>
                    <input type={"text"} placeholder={"Email"} value={email} onChange={e => {
                        setEmail(e.target.value)
                        let emailRegex = /^(?!.*\s)(?![@.])(?=[^@]*@[^@]*$)(?=[^@]{6,})(?=[^@]*[a-zA-Z]).*[@].*$/g;
                        setIsValidEmail(emailRegex.test(e.target.value))
                    }}/>
                </div>
                {(isValidEmail === false && email !== '') &&
                    <p style={{color: "#f85555"}}>Email không hợp lệ</p>}
                <form className={style.password}>
                    <input type={"password"} placeholder={"Mật khẩu"} value={password} onChange={e => {
                        setPassword(e.target.value.slice(0, 32))
                        let passwordRegex = /^[^ ,./<>?;':"[\]{}+=-]+$/;
                        setIsValidPass(passwordRegex.test(e.target.value));
                    }}/>
                </form>
                {(isValidPass === false && password !== '') &&
                    <p style={{color: "#f85555"}}>Mật khẩu không hợp lệ</p>}
            </div>
            <div className={style.buttons}></div>
            {isValid === false && <p style={{color: "#f85555"}}>Người anh em chưa có tài khoản</p>}
            <div className={style.btnLogin}>
                <button onClick={() => {
                    login('http://localhost:3001/login', data)
                }}><i><FontAwesomeIcon icon={faArrowRight}/></i></button>
            </div>
            <div className={style.another}>
                <div className={style.forgotPass}>BẠN KHÔNG THỂ ĐĂNG NHẬP</div>
                <div className={style.btnRegister} onClick={() => {
                    navigate('/register')
                }}>TẠO TÀI KHOẢN
                </div>
            </div>
        </div>
    </>)
}

export default PageLogin