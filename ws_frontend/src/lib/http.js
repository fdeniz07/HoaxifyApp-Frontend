import axios from "axios";
import { i18nInstance } from "../locales";

const http = axios.create();

// interceptor function : Buradaki amacimi dilleri her sayfaya ya da componente eklemek yerine tek bir yerden kontrol etmis olacagiz.
http.interceptors.request.use(
    (config) => {
        config.headers["Accept-Language"] = i18nInstance.language
        return config;
    }
)
export default http;