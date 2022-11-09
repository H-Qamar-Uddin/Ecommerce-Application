import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  given_name: string
  family_name: string
  email: string
  name: string
  isAdmin: boolean
}

const userSchema = new mongoose.Schema(
  {
    given_name: {
      type: String,
    },
    family_name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  }, 
  { timestamps: true },
)

export default mongoose.model<UserDocument>('User', userSchema)
