import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.scss";
import "./locales";
import {RouterProvider} from "react-router-dom";
import router from "./router";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 3.Yol RouteProvider Yöntemi */}
   <RouterProvider router={router} />

   {/* 1. Yol : Eski yöntem */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter> */}

  {/* 2. Yol : Eski yöntem ile kullanilmak istenirse
    <HashRouter> 
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </HashRouter> */}
  </React.StrictMode>
);
