import style from "./SideBar.module.css";

function SideBar() {
    const objTopic = [
        {id: 1, title: 'Chủ đề A', illustration: 'https://i.pinimg.com/564x/02/da/40/02da4071ff7db2a58ab630526b0eacfc.jpg'},
        {id: 2, title: 'Chủ đề B', illustration: 'https://i.pinimg.com/564x/e3/c9/01/e3c9012995d526ccd939694b832e9d0b.jpg'},
        {id: 3, title: 'Chủ đề C', illustration: 'https://i.pinimg.com/564x/5d/b3/9d/5db39d848d2a6845f695fdcf0934cb06.jpg'},
    ]
    return (
        <>
            <div className={style.listTrendingTopics}>
                <div className={style.title}>
                    Chủ đề đang thịnh hành
                </div>
                <div className={style.topics}>
                    {
                        objTopic.map((data, index)=>(
                            <div key={index} className={style.topic}>
                                <div className={style.illustration}
                                     style={{backgroundImage: `url(${data.illustration})`}}>
                                    <div className={style.coating}>
                                        <div className={style.nameTopic}>
                                            #{data.title}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default SideBar