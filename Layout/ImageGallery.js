import React from "react";
import "../CSS/imagegallery.css";
import bellville from "../images/Bellville.jpg";
import sctm from "../images/SCTM2017.jpg";
import hill from "../images/NavalHill.jpg";
import mercbenz from "../images/MercBenz.jpg";
import kimberley from "../images/Kimberly.jpg";
import constantia from "../images/ConstantiaNek.jpg";

const ImageGallery = () => {
  return (
    <>
      <div className="header">
        <h1>Responsive Image Grid</h1>
        <p>Resize the browser window to see the responsive effect.</p>
      </div>

      <div className="row">
        <div className="column">
          <img src={bellville} />
          <img src={sctm} />
          <img src={hill} />
          <img src={mercbenz} />
          <img src={kimberley} />
          <img src={constantia} />
        </div>

        <div className="column">
          <img src={constantia} />
          <img src={hill} />
          <img src={bellville} />
          <img src={kimberley} />
          <img src={sctm} />
          <img src={mercbenz} />
        </div>

        <div className="column">
          <img src={sctm} />
          <img src={mercbenz} />
          <img src={kimberley} />
          <img src={hill} />
          <img src={constantia} />
          <img src={bellville} />
        </div>

        <div className="column">
          <img src={kimberley} />
          <img src={mercbenz} />
          <img src={constantia} />
          <img src={hill} />
          <img src={bellville} />
          <img src={sctm} />
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
