import axios from 'axios'

export default function signUp(body) {
  return axios.post('/api/v1/users',body);
}
