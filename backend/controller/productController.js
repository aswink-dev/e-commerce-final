import Product from "../model/productSchema.js"

export const  productController=async(req,res)=>{
  try{
      const product=req.body
    let newProduct=await Product.create(product)
    res.status(201).json({
        message:"Product added",
        newProduct
    })
  }catch(err){
       res.status(500).json({
        message:"server error",
        err
       })
  }

}

export const getProduct=async(req,res)=>{
  try {    
    let products=await Product.find()
    res.status(200).json({
        message:"Products fetched successfully",
        products
    })
  } catch (error) {
     res.status(500).json({
        message:"server error",
        error
       })
  }
}

export const getProductById=async(req,res)=>{
try {
  const {id}=req.params
const product=await Product.findById(id)

 if(!product){
      res.status(404).json({
        message:"product not found"
      })
    }

res.status(200).json({
        message:"Product fetched successfully",
        product
    })
} catch (error) {
  res.status(500).json({
        message:"server error",
        error
       })
}
}


export const updateProduct=async(req,res)=>{
  try {
    const {id}=req.params
    const product=req.body
    const updatedProduct=await Product.findByIdAndUpdate(id,product,{new:true})

    if(!updatedProduct){
      return res.status(404).json({
        message:"product not found"
      })
    }

    res.status(200).json({
        message:"Product fetched successfully",
        updatedProduct
    })
  } catch (error) {
      res.status(500).json({
        message:"server error",
        error
       })
  }
}


export const deleteProduct=async(req,res)=>{
try {
    const {id}=req.params
  const deleted=await Product.findByIdAndDelete(id)
  
    if(!deleted){
      res.status(404).json({
        message:"product not found"
      })
    }

    res.status(200).json({
        message:"Product deleted successfully",
    })
} catch (error) {
   res.status(500).json({
        message:"server error",
        error
       })
}
}

