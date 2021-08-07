import React from "react";
import hc3 from "../hc3/hc3.css";

import useLongPress from "../useLongPress";

const Hc3 = ({ item }) => {
  const onLongPress = () => {
    console.log("longpress is triggered");
  };

  const onClick = () => {
    console.log("click is triggered");
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);
  return item.map((item) => (
    <div
      {...longPressEvent}
      style={{
        backgroundColor: item.cards[0].bg_color,
      }}
      className="hc3_container"
    >
      <img
        style={{ width: "150px", height: "50px", marginTop: "20px" }}
        src={item.cards[0].bg_image.image_url}
        alt=""
      />
      <h1
        style={{ color: item.cards[0].formatted_title.entities[0].color }}
        className="hc3_title"
      >
        {item.cards[0].title}
      </h1>
      <h3 className="hc3_description">{item.cards[0].description}</h3>
      <button
        style={{ backgroundColor: item.cards[0].cta[0].bg_color }}
        className="hc3_button"
      >
        <a href="https://instagram.com/">
          <h1
            style={{ color: item.cards[0].cta[0].text_color }}
            className="hc3_button_txt"
          >
            {item.cards[0].cta[0].text}
          </h1>
        </a>
      </button>
    </div>
  ));
};

export default Hc3;
