import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  password: String,
  confirmPassword: String,
  college: String,
  email: String,
  school: String,
  gender: String,
  bio: String,
  userName: String,
  profilepic: String,
  dob: Date,
  followes: Array,
  followes: Array,
  joinedOn: Date,
  lastLogin: Date,
})

const Users = mongoose.model('users', userSchema)

export default Users
