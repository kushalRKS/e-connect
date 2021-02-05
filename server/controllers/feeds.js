import mongoose from 'mongoose'
import Users from '../models/user.js'

const post = [
  {
    tile: 'Lorem Ipsum',
    postedBy: 'Lorem Ipsum',
    content:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
  },
  {
    tile: 'Lorem Ipsum 2',
    postedBy: 'Lorem Impsum 2',
    content:
      "The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
  },
]

export const getFeeds = async (req, res) => {
  try {
    // const users = await Users.find()
    res.status(200).json(post)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
// export const addUser = async (req, res) => {
//   const payload = req.body

//   const newUser = new Users({ ...payload, joinedOn: new Date() })

//   try {
//     await newUser.save()
//     res.status(201).json(newUser)
//   } catch (error) {
//     res.status(409).json({ message: error.message })
//   }
// }
