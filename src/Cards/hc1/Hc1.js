import React from "react";
import hc1 from "../hc1/hc1.css";

const Hc1 = ({ item }) => {
  return item.map((item) => (
    <div
      style={{
        backgroundColor: item.cards[0].bg_color,
      }}
      className="hc1_container"
    >
      <div className="hc1_icon">
        <img
          style={{ width: "150px", height: "40px", marginTop: "10px" }}
          src={item.cards[0].icon.image_url}
          alt=""
        />
      </div>
      <h2 className="hc1_title">{item.name}</h2>
      <h3 hc1_description>{item.cards[0].name}</h3>
    </div>
  ));
};

export default Hc1;
