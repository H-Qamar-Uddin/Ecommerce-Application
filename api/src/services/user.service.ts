import User, { UserDocument } from '../models/User'
import { NotFoundError } from '../helpers/apiError'


//Post user
const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return user.save()
}

// update

const updateUser = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> => {
  const foundUser = await User.findByIdAndUpdate(userId, update, {
    new: true,
  })

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

// delete user service
const deleteUser = async (userId: string): Promise<UserDocument | null> => {
  const foundUser = User.findByIdAndDelete(userId)
  if(!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }
  return foundUser
}

//find user by id

const findById = async (userId: string): Promise<UserDocument> => {
  const foundUser = await User.findById(userId)

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}


// find all users
const findAllUsers = async (): Promise<UserDocument[]> => {
  return User.find()
}

export default {
    createUser,
    findAllUsers,
    findById,
    updateUser,
   deleteUser,
  }