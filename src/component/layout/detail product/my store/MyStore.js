import style from './MyStore.module.css'

function MyStore() {
    return (
        <>
            <div className={style.myStore}>
                <div className={"row"}>
                    <div className={"col l3"}>
                        <div className={style.card}>
                            <div className={style.infoOfStore}>
                                <img alt={"avatar"}
                                     src={"https://i.pinimg.com/564x/b9/da/5b/b9da5b6d0b0674c62dd5d9c3bc13bf9e.jpg"}/>
                                <div className={style.info}>
                                    <div className={style.name}>Norman</div>
                                    <div className={style.listBtn}>
                                        <button className={"btn--outline__warning"} style={{maxHeight: "32px"}}>
                                            Chat ngay
                                        </button>
                                        <button style={{maxHeight: "32px"}}>Xem shop</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col l3"}>
                        <div className={style.card}>
                            <div className={style.storeData}>
                                <label>Đánh giá</label>
                                <div className={style.number}>19k</div>
                            </div>
                            <div className={style.storeData}>
                                <label>Sản phẩm</label>
                                <div className={style.number}>270</div>
                            </div>
                        </div>
                    </div>
                    <div className={"col l3"}>
                        <div className={style.card}>
                            <div className={style.storeData}>
                                <label>Tỉ lệ phản hồi</label>
                                <div className={style.number}>94%</div>
                            </div>
                            <div className={style.storeData}>
                                <label>Thời gian phản hồi</label>
                                <div className={style.number}>trong vài giờ</div>
                            </div>
                        </div>
                    </div>
                    <div className={"col l3"}>
                        <div className={style.card}>
                            <div className={style.storeData}>
                                <label>Tham gia</label>
                                <div className={style.number}>5 năm trước</div>
                            </div>
                            <div className={style.storeData}>
                                <label>Người theo giõi</label>
                                <div className={style.number}>124.4k</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyStore