import Product, { ProductDocument } from '../models/Product'
import { NotFoundError } from '../helpers/apiError'



//Post Product
const create = async (product: ProductDocument): Promise<ProductDocument> => {
  return product.save()

  
}

// update

const update = async (
  productId: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument | null> => {
  const foundProduct = await Product.findByIdAndUpdate(productId, update, {
    new: true,
  })

  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }

  return foundProduct
}

// delete product by id
const deleteProduct = async (productId: string): Promise<ProductDocument | null> => {
  const foundProduct = Product.findByIdAndDelete(productId) 
  if(!foundProduct) {
    throw new NotFoundError(`Product with this id: ${productId} is not found`)
  }
  return foundProduct
}

//find product by id

const findById = async (productId: string): Promise<ProductDocument> => {
  const foundProduct = await Product.findById(productId)

  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }

  return foundProduct
}


// find product list
const findAll = async (): Promise<ProductDocument[]> => {
  return Product.find()
}

export default {
    create,
    findAll,
    findById,
    update,
   deleteProduct,
  }