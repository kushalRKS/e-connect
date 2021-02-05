import express from 'express'
import bodyParser from 'body-parser'

const authRoute = express.Router()

authRoute.get('/', (req, res) => {
  res.status(200).send('hello login')
})

export default authRoute
