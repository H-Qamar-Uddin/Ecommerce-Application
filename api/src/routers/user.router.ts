import express from 'express'
import { 
    createUser,
    findAllUsers,
    findById,
    deleteUser, 
    updateUser } from '../controllers/user.controller'

const router = express.Router()


router.get('/', findAllUsers)
router.get('/:userId', findById)
// router.post('/', createUser)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)

export default router

