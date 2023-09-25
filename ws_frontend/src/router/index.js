import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, createHashRouter, HashRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import SignUp from "../pages/SignUp";
import App from "../App";
import { Activation } from "../pages/Activation";
import UserLayout from "../layouts/user-layout";


// 3.Yol Browser Router ve RouterProvider Yöntemi
export default createBrowserRouter([
    {
        path: "/",
         Component: App,
        // element:<UserLayout/>,
        children: [
            {
                path: "/",  // "/" anasayfayi belirtir
                //path: "*", // "*" asagidaki gibi olmayan sayfa yönlendirmesi yerine tüm sayfalari ana sayfaya da yönlendirmek isteyebiliriz.
                index: true,
                Component: Home,
                //errorElement: <div>Unexpected error</div>
            },
            {
                path: "/signup",
                Component: SignUp
            },
            {
                path: "/activation/:token",
                Component: Activation
            }
        ]
    }
])


// 2.Yol HashRouter yapisi yani localhost/#/signup
// Buradaki amac, bazen browser sayfa gecislerini bir istek gibi backende sunuyor. Bunu engellemek icin araya /#/ ekleniyor bu yöntem ile. Eger diger yöntemler secilirse, backend tarafinda bunu handle edecek bir yapi kurulmasi gerekir.
// export const router2 = createHashRouter ([
//   {
//     path: "/",
//     Component:Home
//   },
//   {
//     path: "/signup",
//     Component:SignUp
//   }
// ])