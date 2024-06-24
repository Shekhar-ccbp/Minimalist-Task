import {useState} from 'react'
import BannerSection from '../BannerSection'
import ProductDetails from '../ProductDetails'
import Footer from '../Footer'
import './index.css'

const Home = () => {
  const [showPopup, setShowPopup] = useState(false)

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  return (
    <div className="app-container">
      <BannerSection />

      {/* About Section */}
      <div className="about-container">
        <div className="flex-container">
          <img
            src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1719064200/Frame_hfgssn.png"
            alt="about-frame"
            className="about-frame"
          />
          <p className="about-heading">About</p>
          <img
            src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1719064200/Frame_hfgssn.png"
            alt="about-frame"
            className="about-frame"
          />
        </div>
        <div className="description-div-container">
          <img
            src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1719066240/Frame_1_cwbm1v.png"
            alt="star-frame"
            className="design-frame"
          />
          <div className="description-container">
            <p>
              Our products are crafted exclusively from the dreams and screams
              of young kids who wanted to show their mastery in their chosen
              fields, but were directed towards a factory for daily wages. Each
              cracker bursts brighter than their lost smiles, and can be heard
              louder than their cries for miles. Buy them, burst them, brag
              about them.
              <br />
              <span className="span-txt">
                The choice is yours. Because they dont have one.
              </span>
            </p>
          </div>

          <img
            src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1719066240/Frame_1_cwbm1v.png"
            alt="star-frame"
            className="design-frame"
          />
        </div>
      </div>

      {/* Our Products Section */}
      <div className="our-products-section">
        <div className="flex-container">
          <img
            src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1719064200/Frame_hfgssn.png"
            alt="about-frame"
            className="about-frame"
          />
          <p className="about-heading">Our Products</p>
          <img
            src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1719064200/Frame_hfgssn.png"
            alt="about-frame"
            className="about-frame"
          />
        </div>
        <div className="products-container">
          <div className="product-card-1">
            <img
              src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1719114549/Frame_7_jxqzvj.png"
              alt="raju-img"
              className="card-img"
            />
            <div className="product-card-container">
              <div className="product-name-container">
                <p className="card-name">Raju Rassibomb</p>
              </div>
              <button
                className="quick-view-btn"
                type="button"
                onClick={togglePopup}
              >
                <span className="btn-txt">Quick View</span>
              </button>
            </div>
          </div>
          <div className="product-card-2">
            <img
              src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1719114549/Frame_7_jxqzvj.png"
              alt="raju-img"
              className="card-img"
            />
            <div className="product-card-container">
              <div className="product-name-container">
                <p className="card-name">Ladiyon Ki Rani Chani</p>
              </div>
              <button className="quick-view-btn" type="button">
                <span className="btn-txt">Quick View</span>
              </button>
            </div>
          </div>
          {/* Conditionally displaying Pop-up component */}
          {showPopup && <ProductDetails closePopup={togglePopup} />}
        </div>
      </div>
      <div className="large-frame">
        <img
          src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1719140678/Frame_2_i3rtfh.png"
          alt="long-frame"
        />
      </div>

      <Footer />
    </div>
  )
}

export default Home
