import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  passWord: String,
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
})

const Users = mongoose.model('users', userSchema)

export default Users
