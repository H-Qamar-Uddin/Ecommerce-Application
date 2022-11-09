import { Request, Response } from 'express';
import passport from 'passport';
import { JWT_SECRET } from '../util/secrets';
const router = require('express').Router()
import User from '../models/User'
const jwt = require("jsonwebtoken");

// Login through google

router.post('/login', 
passport.authenticate('google-id-token', {session: false}), 
(req: Request, res: Response) => {
  console.log('req:', req.user)

  const user:any = req.user

  const token = jwt.sign({userId: user._id, isAdmin: user.isAdmin}, 
    JWT_SECRET, {
      expiresIn: '1h',
    })
    res.json({token})
  //res.json({msg : 'done', user: req.user})
})
export default router

