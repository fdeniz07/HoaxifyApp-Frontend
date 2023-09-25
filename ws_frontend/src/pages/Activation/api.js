import axios from 'axios'
import http from '../../lib/http'

export function activateUser(token) {
    return http.patch('/api/v1/users/${token}/active')  

       // axios.patch(`/api/v1/users/${token}/active`) //Backende request atacagimiz yer
    
}

