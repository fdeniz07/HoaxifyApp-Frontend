// Dil ekleme islemini icin artik tek tek import etmek yerine interceptor fonksiyonu araciligi ile cagiracagiz.
// import axios from 'axios'
// import { i18nInstance } from "../../locales";

export default function signUp(body) {
  return http.post('/api/v1/users', body) 
  //   axios.post('/api/v1/users', body, {
  //   headers: {
  //     "Accept-Language": i18nInstance.language
  //   }
  // })
  
}
