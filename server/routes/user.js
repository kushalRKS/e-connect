import express from 'express'
import { getUsers, signUp, signIn } from '../controllers/user.js'

const userRoutes = express.Router()

userRoutes.get('/', getUsers)
userRoutes.post('/login', signIn)
userRoutes.post('/register', signUp)

export default userRoutes
