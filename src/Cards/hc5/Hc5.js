import React from "react";
import ReactDOM from "react-dom";
import hc5 from "../hc5/hc5.css";

const Hc5 = ({ item }) => {
  return item.map((item) => (
    <div
      style={{
        backgroundColor: item.cards[0].bg_color,
      }}
      className="hc5_container"
    >
      <div>
      <img
        style={{ width: "100px", height: "100px", marginTop:"20px"}}
        src={item.cards[0].bg_image.image_url}
        alt=""
      />
      </div>
      <h2 className="hc5_title">{item.name} </h2>
      <h3 className="hc5_description">{item.cards[0].name} </h3>
    </div>
  ));
};

export default Hc5;
