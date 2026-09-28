import express from "express"
import connectDB from "./config/db.js"
import productRoute from './route/productRoute.js'
import cors from 'cors'
import dotenv from 'dotenv'

const app=express()
dotenv.config()
connectDB()
app.use(cors(process.env.BAESE_URI))
app.use(express.json())

app.use('/product',productRoute)

app.listen(3000,()=>{
    console.log('server running ...')
})