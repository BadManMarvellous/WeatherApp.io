import { useState } from "react";
import "./Container.css";
import { BsCloudSun } from "react-icons/bs";
// import { BsCloudRain } from "react-icons/bs";

function Container(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="App" >
      <h3>
        <BsCloudSun />
        {/* <BsCloudRain /> */}
      </h3>
      <div className="container">
        <div className="location">
          <p>Lagos</p>
          <h1>32°C</h1>
          <p style={{ paddingTop: "20px" }}>Clouds</p>
          <h5>Broken Clouds</h5>
        </div>
        <div className="geolocation">
          <p>Latitude: </p>
          <p>Longitude:</p>
        </div>
      </div>
    </div>
  );
}

export default Container;
