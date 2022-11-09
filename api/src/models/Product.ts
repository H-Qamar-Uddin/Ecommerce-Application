import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  name: string
  categories: string
  size: Number
  price: Number
}

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      index: true,
      required: true,
    },
    categories: {
      type: String,
    },
    size: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
)

export default mongoose.model<ProductDocument>('Product', productSchema)



// //product example json data
// {
//   "title": "product title",
//   "description": "product description",
//   "categories": ["category1", "category2"],
//   "color": "red",
//   "size": 10,
//   "price": 100
// }