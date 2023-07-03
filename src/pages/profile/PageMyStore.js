import style from './content/Content.module.css'
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {useState} from "react";

function PageMyStore({id}) {
    const idUser = localStorage.getItem('user')
    const navigate = useNavigate()
    const [dataForProfile, setDataForProfile] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3001/dataForProfile?idUser=${id}`)
            .then(res => {
                setDataForProfile(res.data.dataForProfile)
            })
    }, [id])
    console.log(dataForProfile[0]?.is_store_registered)

    return (
        <>
            {
                (dataForProfile[0]?.is_store_registered === 1 && id === idUser) &&
                <div className={style.openLink} onClick={() => {
                    navigate(`/store/${dataForProfile[0]?.username}?id=${dataForProfile[0]?.id_account}&storeRegistered=${dataForProfile[0]?.is_store_registered}`)
                }}>
                    Bạn đã có đăng ký cửa hàng, bạn có thể bấm vào đây để xem cửa hàng
                </div>
            }
            {
                (dataForProfile[0]?.is_store_registered === 0 && id === idUser) &&
                <div className={style.openLink} onClick={() => {
                    navigate(`/storeManagement/${dataForProfile[0]?.username}?id=${dataForProfile[0]?.id_account}&storeRegistered=${dataForProfile[0]?.is_store_registered}`)
                }}>
                    Bạn chưa đăng ký cửa hàng, bạn có thể bấm vào đây để đăng ký
                </div>
            }
            {
                (dataForProfile[0]?.is_store_registered === 0 && id !== idUser) &&
                <div>
                    Tài khoản này chưa đăng ký cửa hàng
                </div>
            }
            {
                (dataForProfile[0]?.is_store_registered === 1 && id !== idUser) &&
                <div className={style.openLink} onClick={() => {
                    navigate(`/store/${dataForProfile[0]?.username}?id=${dataForProfile[0]?.id_account}&storeRegistered=${dataForProfile[0]?.is_store_registered}`)
                }}>
                    Tài khoản này đã đăng ký cửa hàng, bấm vào để xem
                </div>
            }
        </>
    )
}

export default PageMyStore