import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
// import session from 'express-session'
// import cookieParser from 'cookie-parser'
import passport from 'passport'

import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import movieRouter from './routers/movie.router'
import userRouter from './routers/user.router'
import productRouter from './routers/product.router'
import authRouter from './routers/auth.router'
import loginWithGoogle from './passport/passport'


dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT)

// Global middleware
app.use(
  cors({
    origin: '*',
  })
)
app.use(apiContentType)
app.use(express.json())
/** using passport also requires to ass session and cookieParser middlewares to express
 * To be activated later
app.use(cookieParser())
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
      maxAge: 60 * 60 * 24,
    },
    secret: 'secret',
  })
)
*/
//app.use(passport.session())

app.use(passport.initialize())
passport.use(loginWithGoogle())



// Set up routers
app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/users', userRouter)


app.use("/api/v1/products", productRouter)


app.use('/api/auth', authRouter);
// Custom API error handler
app.use(apiErrorHandler)

export default app
