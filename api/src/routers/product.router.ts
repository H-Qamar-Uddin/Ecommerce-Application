import express from 'express'
import { 
    createProduct,
    findAll,
    findById,
    deleteProduct, 
    updateProduct } from '../controllers/product.controller'
import CheckAuth from '../middlewares/CheckAuth'

const router = express.Router()


router.get('/', findAll)
router.get('/:productId', findById)
router.post('/', createProduct)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)

export default router

