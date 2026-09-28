import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../redux/productSlice'

function ProductDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { product, loading, error } = useSelector((state) => state.product)

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id))
    }
  }, [dispatch, id])

  if (loading) {
    return (
      <div className="page-shell">
        <div className="page-container">
          <div className="glass-panel hero-panel">
            <h2>Loading product...</h2>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="page-shell">
        <div className="page-container">
          <div className="glass-panel hero-panel">
            <h2 style={{ color: '#fca5a5' }}>Error: {error}</h2>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="page-shell">
        <div className="page-container">
          <div className="glass-panel hero-panel">
            <h2>Product not found.</h2>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <div className="page-container">
        <div className="detail-card">
          <span className="brand-badge">Product</span>
          <h2>{product.name}</h2>

          <div className="detail-meta">
            <div className="meta-box">
              <span>Price</span>
              <strong>₹{product.price}</strong>
            </div>
            <div className="meta-box">
              <span>Category</span>
              <strong>{product.category}</strong>
            </div>
            <div className="meta-box">
              <span>Stock</span>
              <strong>{product.stock}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
