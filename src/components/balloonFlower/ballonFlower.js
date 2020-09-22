import React from "react";
import setup from "../../utils/setup";
import favorite from "../../assets/images/favorite.png"

const BallonFlower = ({ actions, helpers,name,latin_name,img,sightings}) => {
  const backgroundImage = {
      backgroundImage: `url(${img})`
  };

  return (
    <div style={backgroundImage} className="flower-ballon">
        <div className="favorit">
            <img src={favorite}/>
        </div>
        <div className="info">
            <h3>{name}</h3>
             <p>{latin_name}</p>
            <a>{sightings}</a>
        </div>
    </div>
  );
};

export default setup(BallonFlower);
