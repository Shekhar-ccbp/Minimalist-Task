import './index.css'

const ProductDetails = ({closePopup}) => (
  <div className="popup-overlay">
    <div className="popup-content">
      <button className="close-button" onClick={closePopup} type="button">
        &times;
      </button>
      <div className="product-description">
        <h1>
          Our products are crafted exclusively from the dreams and screams of
          young kids...
        </h1>
        <p>
          Each cracker bursts brighter than their lost smiles, and can be heard
          louder than their cries for miles. Buy them, burst them, brag about
          them.
        </p>
        <h2>Product Description:</h2>
        <p>
          This product packs an extra punch, thanks to the literal blood, sweat
          and tears of a young boy.
        </p>
        <h3>Product Contents:</h3>
        <ul>
          <li>10 hand-hurting pieces of rassi bombs</li>
          <li>Jilled with great pain</li>
          <li>Raju’s hopes</li>
        </ul>
        <h3>Shipping Time:</h3>
        <p>Before Raju understands that his dreams do not matter.</p>
        <button className="choose-now-button" type="button">
          Choose Now
        </button>
      </div>
    </div>
  </div>
)

export default ProductDetails
