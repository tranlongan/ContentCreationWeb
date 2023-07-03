import PageStart from "../pages/start/PageStart";
import PageDetail from "../pages/detail post/PageDetail";
import OnlyHeader from "../component/layout/only header";
import PageProfile from "../pages/profile/PageProfile";
import OnlyProfile from "../component/layout/only profile";
import PageMyStore from "../pages/profile/PageMyStore";
import OnlyStore from "../component/layout/only store";
import AllProducts from "../pages/store/all products/AllProducts";
import OptionalProducts from "../pages/store/optional products/OptionalProducts";
import Comment from "../pages/detail product/Comment";
import DetailProduct from "../component/layout/detail product";
import PageLogin from "../pages/login and register/PageLogin";
import OnlyLoginAndRegister from "../component/layout/only login and register";
import PageRegister from "../pages/login and register/PageRegister";
import OnlyStoreManagement from "../component/layout/only store management";
import PageStoreManagement from "../pages/store management/PageStoreManagement";
import CatalogManagement from "../pages/store management/catalog management/CatalogManagement";
import ProductManagement from "../pages/store management/product management/ProductManagement";
const publicRoutes = [
    {path: '/', component: PageStart},
    {path: '/login', component: PageLogin, layout: OnlyLoginAndRegister},
    {path: '/register', component: PageRegister, layout: OnlyLoginAndRegister},
    {path: '/detailPost/:name', component: PageDetail, layout: OnlyHeader},
    {path: '/profile/:name', component: PageProfile, layout: OnlyProfile},
    {path: '/profile/myStore', component: PageMyStore, layout: OnlyProfile},
    {path: '/store/:name', component: AllProducts, layout: OnlyStore},
    {path: `/store/optionalProducts/:option`, component: OptionalProducts, layout: OnlyStore},
    {path: `/product/:option`, component: Comment, layout: DetailProduct},
]
const privateRoutes = [
    {path: '/', component: PageStart},
    {path: '/detailPost/:name', component: PageDetail, layout: OnlyHeader},
    {path: '/profile/:name', component: PageProfile, layout: OnlyProfile},
    {path: '/profile/myStore', component: PageMyStore, layout: OnlyProfile},
    {path: '/store/:name', component: AllProducts, layout: OnlyStore},
    {path: `/store/:name/optionalProducts/:option`, component: OptionalProducts, layout: OnlyStore},
    {path: `/product/:option`, component: Comment, layout: DetailProduct},
    {path: `/storeManagement/:option`, component: PageStoreManagement, layout: OnlyStoreManagement},
    {path: `/storeManagement/:option/catalogManagement`, component: CatalogManagement, layout: OnlyStoreManagement},
    {path: `/storeManagement/:option/productManagement`, component: ProductManagement, layout: OnlyStoreManagement},
]

export {publicRoutes, privateRoutes}