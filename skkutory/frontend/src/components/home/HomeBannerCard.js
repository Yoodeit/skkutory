import React from "react";
import "../../css/HomeBannerCard.css";
import { useNavigate } from "react-router-dom";

function HomeBannerCard(props) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(props.link)} className="home-banner-card">
      <div className="img-box">
        <img className="banner-img" alt="bannaerimg" src={props.img}></img>
      </div>
      <p className="baaner-title">{props.title}</p>
    </div>
  );
}

export default HomeBannerCard;
