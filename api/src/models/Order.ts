import mongoose, { Document } from 'mongoose'


export type OrderDocument = Document & {
  userId: string
  products: string[]
  amount: number
  status:  "pending" | "completed" | "cancelled"
  address: string 
  
}

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],

    amount: {
      type: Number,
      required: true,
    },
    address:{
      type: String
    },
    status: {
      type: String,
      enum: ["pending", "completed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
)

export default mongoose.model<OrderDocument>('Order', orderSchema)
