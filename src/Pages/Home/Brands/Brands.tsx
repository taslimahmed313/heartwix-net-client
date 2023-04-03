import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image1 from "../../../Assets/Image/Barnd_Imge/download (1).png";
import Image2 from "../../../Assets/Image/Barnd_Imge/download (2).png";
import Image3 from "../../../Assets/Image/Barnd_Imge/download (3).png";
import Image4 from "../../../Assets/Image/Barnd_Imge/download (4).png";
import Image5 from "../../../Assets/Image/Barnd_Imge/download (5).png";
import Image6 from "../../../Assets/Image/Barnd_Imge/download (6).png";
import Image7 from "../../../Assets/Image/Barnd_Imge/download (7).png";
import Image8 from "../../../Assets/Image/Barnd_Imge/download (8).png";
const Brands = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div>
      <h1>This is slider</h1>
      <Slider {...settings}>
        <div>
          <img src={Image1} alt="" />
        </div>
        <div>
          <img src={Image2} alt="" />
        </div>
        <div>
          <img src={Image3} alt="" />
        </div>
        <div>
          <img src={Image4} alt="" />
        </div>
        <div>
          <img src={Image5} alt="" />
        </div>
        <div>
          <img src={Image6} alt="" />
        </div>
        <div>
          <img src={Image7} alt="" />
        </div>
        <div>
          <img src={Image8} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Brands;
