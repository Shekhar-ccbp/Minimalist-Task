import './index.css'

const BannerSection = () => (
  <div className="home-bg-container">
    <div className="header">
      <img
        src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1719063198/Frame_phho6r.svg"
        alt="nav-img"
        className="header-logo"
      />
    </div>
    <div>
      <p className="home-description">
        The choice is yours.
        <br /> Because they don't have one.
      </p>
      <button className="home-quick-view-btn" type="button">
        <span className="quick-span">Quick View</span>
      </button>
    </div>
  </div>
)

export default BannerSection
