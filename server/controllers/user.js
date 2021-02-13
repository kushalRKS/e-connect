import Users from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signIn = async (req, res) => {
  const { email, password } = req.body
  console.log(email, password)
  const { headers } = req
  const userAgent = headers['user-agent']
  try {
    const existingUser = await Users.findOne({ email: email })

    if (!existingUser)
      return res.status(401).json({ message: 'User does not exsist' })

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    )

    if (!isPasswordCorrect)
      return res.status(401).json({ message: 'Invalid credentials' })

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      'test',
      { expiresIn: '1h' }
    )

    await Users.updateOne(
      {},
      {
        lastLogin: Date.now(),
      }
    )

    res.status(200).json({ result: existingUser, token })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const signUp = async (req, res) => {
  const {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    gender,
  } = req.body

  try {
    const existingUser = await Users.findOne({ email: email })

    if (existingUser) {
      return res.status(400).send({ message: 'User already exsist' })
    }

    if (password !== confirmPassword) {
      res.status(400).json({ message: "Password don't match" })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const result = await Users.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      lastLogin: Date.now(),
      joinedOn: Date.now(),
    })

    const token = jwt.sign({ email: result.email, id: result._id }, 'test', {
      expiresIn: '1h',
    })
    //console.log(result)
    res.status(200).json({ result, token })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await Users.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
