import axios from 'axios'

export const api = axios.create({
    baseURL: "http://localhost:4001",
})

export const createSession = async (email, password) => {
  return api.post('/login', { email, password })
}

