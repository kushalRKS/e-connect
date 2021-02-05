import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const isCustomAuth = token.length < 500
    let decodedData

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, 'test')
      req.userID = decodedData?.id
    }
    next()
  } catch (error) {
    res.status(401).json({ message: 'You are not authorized' })
  }
}

export default auth
