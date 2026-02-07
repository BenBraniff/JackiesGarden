import "./home.css";
import backgroundVideo from "../../assets/flowerVideo.mp4";
import { Menu } from "@boxicons/react";
import vectorLogo from "../../assets/Vector.png";


const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <video className="video" autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div class="content">
          <img
            src={vectorLogo}
            alt="Jackie's Garden Logo"
            className="logo-image"
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;
