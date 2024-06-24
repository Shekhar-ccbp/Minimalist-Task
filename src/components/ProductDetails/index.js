import './index.css'

const ProductDetails = ({closePopup}) => (
  // Modal Container
  <div className="popup-overlay">
    {/* Pop-up Container */}
    <div className="popup-content-container">
      <div className="images-container">
        <div>
          <img
            src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1719128768/Frame_big_gcuhxl.svg"
            alt="popup-img"
            className="main-img"
          />
        </div>
        <div className="sub-container">
          <img
            src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1719127553/Frame_69_3_daofpx.svg"
            alt="sub-img"
            className="sub-images"
          />
          <img
            src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1719127524/Frame_69_asekdh.svg"
            alt="sub-img"
            className="sub-images"
          />
          <img
            src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1719127524/Frame_69_asekdh.svg"
            alt="sub-img"
            className="sub-images"
          />
          <img
            src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1719127524/Frame_69_asekdh.svg"
            alt="sub-img"
            className="sub-images"
          />
        </div>
      </div>

      <div className="products-description-container">
        <div className="top-container">
          <h1 className="description-heading">Raju Rassibomb</h1>
          <button className="close-button" onClick={closePopup} type="button">
            &times;
          </button>
        </div>
        <div className="mrp">
          MRP:
          <br />
          <span className="span-mrp">Raju's Dreams/-</span>
        </div>
        <div className="align">
          <svg
            width="500"
            height="3"
            viewBox="0 0 359 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mrp"
          >
            <path d="M0 1H359" stroke="#F27121" strokeDasharray="1 6 6 4" />
          </svg>
        </div>

        <div className="mrp">
          <p className="description-headings">Product Description:</p>
          <p className="description-summary">
            This product packs an extra punch, thanks to the literal blood,
            sweat and tears of a young boy.
          </p>
        </div>
        <div className="align">
          <svg
            width="500"
            height="3"
            viewBox="0 0 359 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mrp"
          >
            <path d="M0 1H359" stroke="#F27121" strokeDasharray="1 6 6 4" />
          </svg>
        </div>
        <div>
          <p className="mrp description-headings">Product Contents:</p>
          <div className="content-point">
            <img
              src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1719133261/star_pb2ezn.svg"
              alt="star-img"
              className="star-img"
            />
            <p className="description-point">
              10 hand-hurting pieces of rassi bombs
            </p>
          </div>
          <div className="content-point">
            <img
              src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1719133261/star_pb2ezn.svg"
              alt="star-img"
              className="star-img"
            />
            <p className="description-point">Jilled with great pain</p>
          </div>
          <div className="content-point">
            <img
              src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1719133261/star_pb2ezn.svg"
              alt="star-img"
              className="star-img"
            />
            <p className="description-point">Raju’s hopes</p>
          </div>
        </div>

        <div className="align">
          <svg
            width="500"
            height="3"
            viewBox="0 0 359 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mrp"
          >
            <path d="M0 1H359" stroke="#F27121" strokeDasharray="1 6 6 4" />
          </svg>
        </div>

        <div className="mrp">
          <p className="description-headings">Shipping Time:</p>
          <p className="description-summary">
            Before Raju understands that his dreams do not matter.
          </p>
        </div>
        <div className="choose-btn-container">
          <button type="button" className="choose-btn">
            Choose Now
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default ProductDetails
