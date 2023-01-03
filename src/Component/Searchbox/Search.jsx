import React, { useEffect, useState } from "react";
// import axios from "axios";
import { BsCloudSun } from "react-icons/bs";
// import { BsCloudRain } from "react-icons/bs";
import "./Search.css";

const Search = () => {
  const handleClick = () => {};

  const [data, setData] = useState("");
  const [coords, setCoords] = useState(undefined);
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const onSuccess = (data) => {
    setCoords(data.coords);
  };

  const API = {
    url: `https://api.openweathermap.org/data/2.5/weather?q=${location}`,
    key: "d8f4f8cf431e41254494d0868bb93d6a",
  };
  const onError = (err) => {
    console.log(err);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    alert("Geolocation is not supported by this browser");
  }

  useEffect(() => {
    const fetchCurrentLocation = () => {
      const currentLocationURL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.latitude}&lon=${coords?.longitude}&appid=${API.key}`;

      setIsLoading(true);
      fetch(currentLocationURL)
        .then((data) => data.json())
        .then((data) => {
          setIsLoading(false);
          setData(data);
        });
    };

    fetchCurrentLocation();
  }, [coords]);

  const searchLocation = (e) => {
    e.preventDefault();
    fetch(`${API.url}&appid=${API.key}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/*  */}
        <div class="main-item">
          <div class="static-background">
            <div class="background-masker btn-divide-left"></div>
          </div>

          <div class="animated-background">
            <div class="background-masker btn-divide-left"></div>
          </div>

          <div class="shared-dom">
            <p
              className="loading"
              style={{
                margin: "100px",
                letterSpacing: "10px",
                textAlign: "center",
                fontSize: "20px",
                fontFamily: "sans-serif",
                fontWeight: "800px",
              }}
            >
              Loading ...
            </p>
            <div class="sub-rect pure-background"></div>
            <div class="sub-rect pure-background"></div>
            <div class="sub-rect pure-background"></div>
            <div class="sub-rect pure-background"></div>
            <div class="sub-rect pure-background"></div>
            <div class="sub-rect pure-background"></div>
            <div class="sub-rect pure-background"></div>
            <div class="sub-rect pure-background"></div>
          </div>

          <div class="css-dom"></div>
        </div>
        {/* <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div> */}
        {/* <p
          style={{
            textAlign: "center",
          }}
        >
          Loading...
        </p> */}
      </div>
    );
  }

  return (
    <div>
      <div align="center">
        <h1 style={{ fontSize: "50px" }}>WEATHER APP</h1>
        <form className="search_input">
          <input
            type="text"
            placeholder="Enter a location here"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            type="submit"
            style={{ cursor: "pointer" }}
            onClick={searchLocation}
          >
            SEARCH
          </button>
        </form>
        <div className="units">
          <div className="radio">
            <input type="radio" onClick={handleClick} />
            <p>Celsius</p>
          </div>
          <div className="radio">
            <input type="radio" onClick={handleClick} />
            <p>Farenheit</p>
          </div>
        </div>
        {/* <h6>Your Current location</h6> */}
        <div
          className="currentLocation"
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <p>Latitude: {coords.coord.lat} </p> */}
        </div>
      </div>
      <div className="App">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="more_info">
            <h4>MORE INFO</h4>
            <p>
              Feels like:{" "}
              {data.main ? <p className="">{data.main.feels_like} °C</p> : null}
            </p>
            <p>
              Humidity:
              {data.main ? <p className="">{data.main.humidity} °C</p> : null}
            </p>
            <p>
              Pressure:
              {data.main ? <p className="">{data.main.pressure} °C</p> : null}
            </p>
            <hr />
            <p>Wind speed: m/s</p>
            <p>Wind direction: deg</p>
          </div>
          <h3 className="cloud">
            <BsCloudSun />
            {/* <BsCloudRain /> */}
          </h3>
        </div>
        <div className="container">
          <div className="location">
            <p>{data.name}</p>
            <p className="temp">
              {data.main ? <p className="temp">{data.main.temp} °C</p> : null}
            </p>
            <p style={{ paddingTop: "20px" }}>
              {" "}
              {data.weather ? <p>{data.weather[0].description}</p> : null}{" "}
            </p>
          </div>
          <div className="geolocation">
            <p>
              Latitude:{" "}
              {data.coord ? <p className="coord">{data.coord.lon}</p> : null}
            </p>
            <p>
              Longitude:{" "}
              {data.coord ? <p className="coord">{data.coord.lat}</p> : null}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
