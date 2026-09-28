import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/productSlice'
import { useNavigate } from 'react-router-dom'

function ProductForm() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name: formData.name,
      price: Number(formData.price),
      category: formData.category,
      stock: Number(formData.stock),
    }

    try {
      await dispatch(addProduct(product)).unwrap()

      setFormData({
        name: '',
        price: '',
        category: '',
        stock: '',
      })

      navigate('/products')
    } catch (error) {
      console.log('Failed to add product:', error)
    }
  }

  return (
    <div className="page-shell">
      <div className="form-card">
        <h2>Add Product</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter category"
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
            />
          </div>

          <div className="form-group">
            <label>Stock</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Enter stock quantity"
            />
          </div>

          <button type="submit" className="form-btn">
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProductForm