import {} from "react";
import "./Offer.css";
import Home_Logo from "./images/Home.png";
import Economic_Logo from "./images/Economics.png";
import Book_Logo from "./images/Book.png";
function Offer() {
  return (
    <div className="offer py-5 ">
      <h4 className="text-center mb-3 bold_font">What we offer you</h4>
      <div className="offer_content">
        {/*single 1 */}
        <div className="single_offer">
          <div className="offer_logo">
            <img src={Home_Logo} alt="offer_img1" />
          </div>
          <div className="offer_title">
            <h6 className="bold_font">Fully Remote Working</h6>
            <p className="font_size mt-2 mute_color">
              Ea labore takimata dolores sed sit at. Diam amet dolore sea et,
              sit diam voluptua amet sed eirmod stet vero. Ipsum dolores at
              clita duo elitr diam, elitr at lorem.
            </p>
          </div>
        </div>
        {/*single 2 */}
        <div className="single_offer">
          <div className="offer_logo">
            <img src={Economic_Logo} alt="offer_img1" />
          </div>
          <div className="offer_title">
            <h6 className="bold_font">Competitive salary</h6>
            <p className="font_size mt-2 mute_color">
              Ea labore takimata dolores sed sit at. Diam amet dolore sea et,
              sit diam voluptua amet sed eirmod stet vero. Ipsum dolores at
              clita duo elitr diam, elitr at lorem.
            </p>
          </div>
        </div>
        {/*single 3 */}
        <div className="single_offer">
          <div className="offer_logo">
            <img src={Book_Logo} alt="offer_img1" />
          </div>
          <div className="offer_title">
            <h6 className="bold_font">Learning opportunities</h6>
            <p className="font_size mt-2 mute_color">
              Ea labore takimata dolores sed sit at. Diam amet dolore sea et,
              sit diam voluptua amet sed eirmod stet vero. Ipsum dolores at
              clita duo elitr diam, elitr at lorem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
