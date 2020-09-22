import React,{useState,useEffect} from "react";
import { setup } from "../../utils/setup";
import BallonFlower from "../../components/balloonFlower/ballonFlower"

const HomePage = ({ actions, helpers }) => {

  const [flowers,setFlower] = useState([]);

  useEffect(()=>{
    getFlower();
  },[])

  const getFlower = async () => {
    const response = await fetch("https://flowrspot-api.herokuapp.com/api/v1/flowers");
    const data = await response.json();
    setFlower(data.flowers);
  };

  return (
    <div className="home-container">
      <div className="search-holder">
        <h1>Discover flowers around you</h1>
        <h3>Explore between more than 8.427 sightings</h3>
        <input type="text" placeholder="Looking for something specific?"/>
      </div>
      <div className="flowers-wrapper">
        {flowers.map((flower) =>(
          <BallonFlower key={flower.id} name={flower.name} latin_name={flower.latin_name} img={flower.profile_picture} sightings={flower.sightings}/>
        ))}
      </div>
    </div>
  );
};

export default setup(HomePage);
