//import logo from './logo.svg';
import "./App.css";
//import Doge from './Components/Doge.js';
import "bootstrap/dist/css/bootstrap.min.css";
import heart from "./assets/heart-red-icon.svg";
import searchicon from "./assets/search-icon.svg";
import whiteheart from "./assets/heart-white-icon.svg";
import axios from "axios";
import { useState } from "react";
const App = () => {
  const [dog, setDog] = useState([]);
  const [breed, setBreed] = useState("");
  const [fav, setFav] = useState([]);
  const search = async () => {
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random/10`
      );
      const dogurl = response.data.message;
      setDog(dogurl);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const togglefav = (url) => {
    if (fav.includes(url)) {
      setFav(fav.filter((fav) => fav !== url));
    } else {
      setFav([...fav, url]);
    }
    console.log(fav);
  };
  return (
    //<Doge/>
    <div className="App">
      <div className="header">
        <h1>Dog Breeds</h1>
        <img src={heart} />
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Enter a dog breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <button className="search" onClick={search}>
          <img src={searchicon} />
          Search
        </button>
      </div>

      <div className="image-table">
        <div className="row">
          {dog.map((value) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="thumbnail">
                  <div className="img-container">
                    <img src={value} className="image" alt="..." />
                    <div className="wheart" onClick={() => togglefav(value)}>
                      {fav.includes(value) ? (
                        <img src={heart} />
                      ) : (
                        <img src={whiteheart} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="fav-image-table">
        <h1>
          <img src={heart} />
          Favourite
        </h1>
        <div className="row">
          {fav.map((value) => {
            return (
              <div className="col-lg-3 col-sm-6">
                
                  <div className="img-container">
                    <img src={value} className="favimage" alt="" />
                    <div className="wheart-fav">
                      <img src={heart} alt="" />
                    </div>
                  </div>
                </div>
              
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
