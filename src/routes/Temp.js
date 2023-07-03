function Temp() {
    return (
        <Routes>
            {
                publicRoutes.map((route, index) => {
                    // hiển thị public routes
                })
            }
            {
                isAuthenticated && privateRoutes.map((route, index) => {
                    // hiển thị private routes
                })
            }
        </Routes>
    )
}

export default Temp