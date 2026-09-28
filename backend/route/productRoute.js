import express from "express"
import { deleteProduct, getProduct, getProductById, productController, updateProduct } from "../controller/productController.js"

const route=express.Router()

route.post('/add',productController)
route.get('/',getProduct)
route.get('/:id',getProductById)
route.put('/update/:id',updateProduct)     
route.delete('/delete/:id',deleteProduct)

export default route 