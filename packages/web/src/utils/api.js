// import "../../node_modules/dotenv/config.js"
// import axios from 'axios'


// const api_url = process.env.REACT_APP_API
// console.log(api_url)
// export const api = axios.create({
//     baseURL: api_url,

// })
import axios from 'axios'

export const api = axios.create({
    baseURL: "http://localhost:4001",
})

export const createSession = async (email, password) => {
  return api.post('/login', { email, password })
}

