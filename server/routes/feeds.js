import express from 'express'
import { getFeeds } from '../controllers/feeds.js'
import auth from '../middleware/auth.js'

const feedRoutes = express.Router()

feedRoutes.get('/', auth, getFeeds)

export default feedRoutes
