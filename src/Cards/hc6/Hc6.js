import React from "react";
import hc6 from "../hc6/hc6.css";
import { FaChevronRight } from "react-icons/fa";

const Hc6 = ({ item }) => {
  return item.map((item) => (
    <div className="hc6_container">
      <div className="hc6_icon">
        <img
          style={{ width: "40px", height: "40px", marginTop: "20px" }}
          src={item.cards[0].icon.image_url}
          alt=""
        />
      </div>
      <h3
        style={{ color: item.cards[0].formatted_description.entities[0].color }}
        className="hc6_title"
      >
        {item.cards[0].title}
      </h3>
      <FaChevronRight className="hc6_arrow" />
    </div>
  ));
};

export default Hc6;
