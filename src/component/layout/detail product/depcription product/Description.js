import style from './Description.module.css'

function Description() {
    return (
        <>
            <div className={style.description}>
                <div className={style.title}>MÔ TẢ SẢN PHẨM</div>
                <div className={style.content}>
                    MÔ TẢ SẢN PHẨM
                    Sony Playstation 5 (PS5) là cỗ máy chiến game không thể thiếu của mọi game thủ.
                    PS5 với thiết kế chữ V độc đáo và đầy đủ cổng kết nối
                    PS5 đem lại trải nghiệm cho người dùng tốt hơn khi đồ họa trong các ván game được nâng cấp mạnh mẽ,
                    độ phân giải 8K chân thực và sắc nét.
                    PS5 được trang bị ổ cứng SSD 825GB độc quyền. Với nâng cấp này, chiếc máy chơi game thế hệ mới của
                    Sony có khả năng nâng cấp dung lượng lưu trữ, tốc độ tải nhanh hơn, bản đồ hiển thị lớn hơn cũng như
                    quản lý bộ nhớ thẻ game hoàn thiện hơn.
                    PS5 có công cụ Tempest dựa trên đơn vị tính toán AMD tùy chỉnh mới, sử dụng bản đồ tùy chỉnh
                    Head-related Transfer Function (HRTF), công nghệ mới này giúp các game thủ trải nghiệm âm thanh 3D
                    trong game chân thực, sống động hơn khi sử dụng tai nghe hay cả với loa ngoài.
                </div>
            </div>
        </>
    )
}

export default Description