import axios from 'axios'

const http = axios.create({
    baseURL: 'http://api.tianapi.com/',
})

export default http