import Content from "./content/Content";

function PageProfile({id}) {
    localStorage.setItem('checkNavLink', JSON.stringify(1))
    return (
        <>
           <Content idUser={id}/>
        </>
    )
}

export default PageProfile