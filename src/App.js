import {publicRoutes, privateRoutes} from "./routes/routes";
import {Routes, Route, useLocation} from "react-router-dom";
import DefaultLayout from "./component/layout/default layout";
import {Fragment, useEffect, useState} from "react";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('user') !== null)

    const location = useLocation()
    useEffect(() => {
        setIsAuthenticated(localStorage.getItem('user') !== null)
    }, [location.pathname])
    console.log(isAuthenticated)
    return (
        <Routes>
            {(isAuthenticated === false) &&
                publicRoutes.map((route, index) => {
                    const Page = route.component
                    let Layout = DefaultLayout
                    if (route.layout) {
                        Layout = route.layout
                    } else if (route.layout === null) {
                        Layout = Fragment
                    }
                    console.log('Routes public')
                    return <Route key={index}
                                  path={route.path}
                                  element={(<Layout><Page/></Layout>)}/>
                })
            }
            {
                (isAuthenticated === true) && privateRoutes.map((route, index) => {
                    const Page = route.component
                    let Layout = DefaultLayout
                    if (route.layout) {
                        Layout = route.layout
                    } else if (route.layout === null) {
                        Layout = Fragment
                    }
                    console.log('Routes private')
                    return <Route key={index} path={route.path} element={(<Layout><Page/></Layout>)}/>
                })
            }
        </Routes>
    )
}

export default App