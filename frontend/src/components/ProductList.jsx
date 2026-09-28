import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct } from "../redux/productSlice";
import { Link, useNavigate } from "react-router-dom";

function ProductList() {
  const { products, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  if (loading) {
    return (
      <div className="page-shell">
        <div className="page-container">
          <div className="glass-panel hero-panel">
            <h2>Loading products...</h2>
          </div>
        </div>
      </div>
    );
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
    );
  }

  const hasProducts = Array.isArray(products) && products.length > 0;

  return (
    <div className="page-shell">
      <div className="page-container">
        <div className="section-header">
          <div>
            <span className="brand-badge">Inventory</span>
            <h2>Product List</h2>
          </div>
          <div className="glass-panel" style={{ borderRadius: '999px', padding: '10px 18px' }}>
            <p style={{ margin: 0, color: '#cbd5e1' }}>Total: {products.length || 0}</p>
          </div>
        </div>

        {!hasProducts ? (
          <div className="empty-state">
            <h3 style={{ margin: 0, fontSize: '1.5rem' }}>No products found.</h3>
            <p style={{ marginTop: '8px', color: '#cbd5e1' }}>Add a new product to get started.</p>
          </div>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <div key={product._id} className="product-card">
                <span className="chip">{product.category || 'General'}</span>
                <h3>{product.name}</h3>

                <div className="meta-row">
                  <span>Price</span>
                  <strong>₹{product.price}</strong>
                </div>

                <div className="meta-row">
                  <span>Stock</span>
                  <strong>{product.stock}</strong>
                </div>

                <div className="card-actions">
                  <Link to={`/product/${product._id}`} className="card-btn primary" style={{ flex: 1 }}>
                    View details
                  </Link>
                  <button
                    onClick={() => navigate('/updateproduct', { state: { product } })}
                    className="card-btn warn"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="card-btn danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
