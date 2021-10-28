import axios from 'axios'

const url = 'http://localhost:8082'
const http = axios.create({
    baseURL: url
})

export default {
    get: () => {
        const ret = http.get('/')
        return ret
    },

    add: (iten) =>{
        const ret = http.post('/', iten)
        return ret
    },

    del: (iten) => {
        const ret = http.delete('/', iten)
        return ret
    },

    edit:(iten) => {
        const ret = http.patch('/', iten)
        return ret
    },
}