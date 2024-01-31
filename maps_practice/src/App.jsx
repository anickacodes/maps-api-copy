import axios from "axios";
import { useEffect, useState } from "react";
import GoogleMapsComponent from "./GoogleMapsComponent";


const API_KEY = import.meta.env.VITE_API_KEY;

const App = () => {
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("restaurant");

  // proxy server call
  const endpoint = "http://localhost:3001/places";

  const handleSEarch = (type) => {
    setSearch(type);

    axios
      .get(endpoint, {
        params: {
          key: API_KEY,
          location: "40.712776, -74.005974",
          radius: "5000",
          type: search,
        },
      })
      .then((res) => {
        console.log(res.data);
        setPlaces(res.data.results);
      })
      .catch((err) => {
        console.error("error fetching nearby places", err);
        console.error("error response data", err.response.data);
      });
  };

  useEffect(() => {
    handleSEarch();
  }, []);

  return (
    <div>
      <h1> Nearny Places</h1>
      <div className="button-panel">
        <button onClick={() => handleSEarch("restaurants")}>Restaurants</button>
        <button onClick={() => handleSEarch("lodging")}>Lodging</button>
        <button onClick={() => handleSEarch("shopping_mall")}>Shopping</button>
        <button onClick={() => handleSEarch("movie_theater")}>
          Entertainment
        </button>
        <button onClick={() => handleSEarch("hospital")}>Healthcare</button>
        <button onClick={() => handleSEarch("airport")}>Transportation</button>
        <button onClick={() => handleSEarch("park")}>Outdoor</button>
        <button onClick={() => handleSEarch("bank")}>Services</button>
      </div>
      <GoogleMapsComponent places={places} />
    </div>
  );
};

export default App;
