import style from './Content.module.css'

function Content({children}) {
    return (
        <>
            <div>
                <ul className={style.nav}>
                    <li>Sắp xếp theo</li>
                    <li className={style.active}>Phổ biến</li>
                    <li>Mới nhất</li>
                    <li>Bán chạy</li>
                    <li>Giá
                        <select>
                            <option>Thấp tới cao</option>
                            <option>Cao tới thấp</option>
                        </select>
                    </li>
                </ul>
                <div className={style.content}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Content