import React from "react";
import fill219 from "../images/fill219.png";

function card(props) {
  return (
    <>
      <div className="card">
        <div className="fuji-info">
          <img
            src={props.img[Object.keys(props.img)[0]]}
            alt=""
            className="main-img"
          />
        </div>
        <div className="fuji-img">
          <div className="lpv">
            <img src={fill219} alt="" className="location" />
            <h5 className="place"> {props.country}</h5>
            <p className="view">{props.view}</p>
          </div>
          <h1 className="title"> {props.title}</h1>
          <h3 className="date">{props.period}</h3>
          <p className="info">{props.description}</p>
        </div>
      </div>
    </>
  );
}

// const Fuji = {
//   img: "Rectangle.png",
//   country: "japan",
//   view: "view on Google map",
//   title: "Mount Fuji",
//   period: "12 Jan, 2021 - 24 Jan, 2021",
//   description:
//     "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// };

export default card;
