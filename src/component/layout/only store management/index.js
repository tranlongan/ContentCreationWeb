import {useLocation} from "react-router-dom";
import RegisterStore from "./register store/RegisterStore";
import Sidebar from "./sidebar/Sidebar";

function OnlyStoreManagement({children}) {
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const storeRegistered = query.get('storeRegistered')
    const idUser_ = query.get('id')

    const Children = children.type
    return (
        <>
            {
                (storeRegistered === '1') &&
                <div>
                    <div className={"row"}>
                        <div className={"l3"}>
                            <Sidebar/>
                        </div>
                        <div className={"l9"}>
                            <Children idUser={idUser_}/>
                        </div>
                    </div>
                </div>
            }
            {
                storeRegistered === '0' &&
                <div style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "50% 50%",
                    backgroundImage: "url(https://gstatic.gvn360.com/2022/10/Kinh-thanh-phon-hoa-9.jpg)",
                    overflow: "auto"
                }}>
                    <RegisterStore idUser={idUser_}/>
                </div>
            }
        </>
    )
}

export default OnlyStoreManagement