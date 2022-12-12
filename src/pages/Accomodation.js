import React from "react";
import accImg1 from "../img/Davies-Hotel 1.png";
import accImg2 from "../img/U.I 1.png";
import accImg3 from "../img/unsplash_iAftdIcgpFc.png";

const Accommodation = () => {
  const images = [accImg1, accImg2, accImg3];
  return (
    <div className="accommodation">
      <div className="accommodation_info">
        <header className="header">
          <h2 className="heading">Hotel accommodation</h2>
          <p className="info">
            Participants will be responsible for their accommodation. Below are
            available standard hotels and guest houses with good lodging in and
            around the University of Ibadan. Charges are moderate, between{" "}
            <span className="redtxt">N8, 000 and N30, 000/night.</span>
          </p>
        </header>
        <div className="accommodation_info_list-cont">
          <ul className="list">
            <li className="item"> University of Ibadan Hotels, UI, Ibadan</li>
            <li className="item"> University of Ibadan Hotels, UI, Ibadan</li>
            <li className="item"> University of Ibadan Hotels, UI, Ibadan</li>
            <li className="item">
              Institute of Church Guest House, Samonda, Ibadan.
            </li>
            <li className="item"> University of Ibadan Hotels, UI, Ibadan</li>
            <li className="item"> University of Ibadan Hotels, UI, Ibadan</li>
            <li className="item"> University of Ibadan Hotels, UI, Ibadan</li>
            <li className="item">
              De Executive Hotel near Global International, off Osuntokun,
              Bodija Ibadan.
            </li>
            <li className="item"> University of Ibadan Hotels, UI, Ibadan</li>
          </ul>
        </div>
      </div>
      <div className="accommodation_media">
        {images.map((url, i) => (
          <div key={i} className="accommodation_media_wrapper">
            <img className="img" src={url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accommodation;
