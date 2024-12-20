import { Link } from "react-router-dom";
import "./../HeroSection/HeroSection.css";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="left-side">
          <div>
            <div className="heading">
              <h2>
                FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
              </h2>
            </div>
            <div className="description">
              <p className="text-xl ">
                Discover a wide range of stylish and comfortable clothing
                tailored to your unique preferences. Whether you&apos;re looking
                for everyday essentials or statement pieces, we&apos;ve got you
                covered with quality and elegance in every stitch.
              </p>
            </div>
            <div className="shop-btn">
              <Link className="btn" to={""}>
                Explore Now
              </Link>
            </div>

            <div className="stats">
              <div className="stats-desc">
                <h3>200+</h3>
                <p>International Brands</p>
              </div>
              <div className="line"></div>
              <div className="stats-desc">
                <h3>200+</h3>
                <p>International Brands</p>
              </div>
              <div className="line"></div>
              <div className="stats-desc">
                <h3>200+</h3>
                <p>International Brands</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <img
            src="https://images.pexels.com/photos/29504483/pexels-photo-29504483/free-photo-of-stylish-fashion-portrait-in-lahore-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
