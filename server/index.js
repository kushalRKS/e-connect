import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import authRoute from './routes/auth.js'
import feedRouter from './routes/feeds.js'
import userRoutes from './routes/user.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use('/login', authRoute)
app.use('/users', userRoutes)
app.use('/posts', feedRouter)

const CONNECTIONURL =
  // 'mongodb+srv://kushals:1@B3ngal1@cluster0.xyz63.mongodb.net/<dbname>?retryWrites=true&w=majority'
  'mongodb://localhost:27017/econnect'

const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTIONURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((error) =>
    console.error('DB Connection Failed ⛔️⛔️⛔️', error.message)
  )

mongoose.set('useFindAndModify', false)
