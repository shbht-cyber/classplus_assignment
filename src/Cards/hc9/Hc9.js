import React from "react";
import ReactDOM from "react-dom";
import hc9 from "../hc9/hc9.css";

const Hc9 = ({ item }) => {
  return item.map((item) => (
    <div className="hc9_container">
      <div className="div1">
        <img
          style={{ width: "65px", height: "65px", marginLeft: "20px" }}
          src={item.cards[0].bg_image.image_url}
          alt=""
        />
      </div>
      <div className="div2">
        <img
          style={{ width: "65px", height: "65px", marginLeft: "20px" }}
          src={item.cards[1].bg_image.image_url}
          alt=""
        />
      </div>
      <div className="div3">
        <img
          style={{ width: "65px", height: "65px", marginLeft: "20px" }}
          src={item.cards[2].bg_image.image_url}
          alt=""
        />
      </div>
    </div>
  ));
};

export default Hc9;
