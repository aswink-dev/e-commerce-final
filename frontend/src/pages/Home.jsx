import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="page-shell">
      <div className="page-container">
        <section className="editorial-hero">
          <div className="editorial-copy">
            <p className="eyebrow">01 / AUTUMN EDIT</p>
            <h1>
              OBJECTS
              <span>WORTH</span>
              KEEPING.
            </h1>
            <p className="lead">
              Quiet essentials designed for slow mornings, long afternoons and the rituals between.
            </p>

            <div className="cta-row">
              <Link to="/products" className="primary-btn">
                EXPLORE COLLECTION →
              </Link>
              <Link to="/add" className="secondary-btn">
                ADD PRODUCT
              </Link>
            </div>

            <div className="stat-row">
              <div>
                <strong>240</strong>
                <span>Pieces</span>
              </div>
              <div>
                <strong>04</strong>
                <span>Collections</span>
              </div>
              <div>
                <strong>₹4,990</strong>
                <span>Starting at</span>
              </div>
            </div>
          </div>

          <div className="editorial-visual">
            <div className="product-visual product-visual--large">
              <span className="visual-tag">STUDIO / 04</span>
            </div>
            <div className="floating-note">
              <span>03</span>
              <small>HAND-FINISHED</small>
              <small>COTTON / 240 GSM</small>
            </div>
          </div>
        </section>

        <section className="index-section">
          <div className="section-heading">
            <p className="eyebrow">SHOP BY OBJECT</p>
          </div>

          <div className="category-index">
            <div className="category-index__row">
              <span>01</span>
              <Link to="/products">OUTERWEAR</Link>
            </div>
            <div className="category-index__row">
              <span>02</span>
              <Link to="/products">ESSENTIALS</Link>
            </div>
            <div className="category-index__row">
              <span>03</span>
              <Link to="/products">ACCESSORIES</Link>
            </div>
            <div className="category-index__row">
              <span>04</span>
              <Link to="/products">FOOTWEAR</Link>
            </div>
          </div>
        </section>

        <section className="featured-section">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">NEW ARRIVALS</p>
              <h2>Crafted for everyday rituals.</h2>
            </div>
            <Link to="/products" className="text-link">
              VIEW ALL →
            </Link>
          </div>

          <div className="feature-grid">
            <article className="feature-item feature-item--large">
              <div className="feature-media feature-media--dark" />
              <div className="feature-meta">
                <span>001</span>
                <h3>Field Coat</h3>
                <p>₹4,990</p>
              </div>
            </article>

            <article className="feature-item">
              <div className="feature-media feature-media--linen" />
              <div className="feature-meta">
                <span>002</span>
                <h3>Canvas Tote</h3>
                <p>₹2,490</p>
              </div>
            </article>

            <article className="feature-item">
              <div className="feature-media feature-media--stone" />
              <div className="feature-meta">
                <span>003</span>
                <h3>Everyday Shirt</h3>
                <p>₹3,290</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home