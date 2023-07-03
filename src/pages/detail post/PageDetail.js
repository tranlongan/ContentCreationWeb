import Content from "./content/Content";
import SideBar from "./sidebar/SideBar";

function PageDetail({idUser, idArticle}) {
    return (
        <>
            <div className="row" style={{marginTop: "120px"}}>
                <div className="col l6 wide">
                    <Content idUser={idUser} idArticle={idArticle}/>
                </div>
                <div className="col l3">
                    <SideBar idUser={idUser}/>
                </div>
            </div>
        </>
    )
}

export default PageDetail