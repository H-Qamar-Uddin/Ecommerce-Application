import mongoose, { Document } from 'mongoose'
import productService from 'src/services/product.service'

export type CartDocument = Document & {
  userId: string
  products: string[]
}

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
        {
        productName: {
          type: String
        },
        quantity: {
          type: Number,
          default: 1,
        },
      }
    ]
  },
  { timestamps: true }
)

export default mongoose.model<CartDocument>('Cart', cartSchema)
