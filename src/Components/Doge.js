import React, { useState } from "react";
import axios from "axios";
const Doge = () => {
  const [dog, setDog] = useState([]);
  const [breed, setBreed] = useState("");
  const [fav, setFav] = useState([]);
  const search = async () => {
    //console.log("clicked");
    try {
      /*
    axios.get(`https://dog.ceo/api/breed/${breed}/images/random/10`).then((response) => {
       console.log(response);
      setDog(response.data.message);
    });
    */
      const response = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random/10`
      );
      const dogurl = response.data.message;
      setDog(dogurl);
    } catch (error) {
      console.error("Error fecthing", error);
    }
  };

  const togglefav = (url) => {
    if(fav.includes(url)){
        setFav(fav.filter(fav => fav !== url));
    }
    else{
        setFav([...fav,url]);
    }
    console.log(fav);
  }
  return (
    <div>
      <p>Hello just checking</p>
      <div>
        <input
          type="text"
          placeholder="Enter a dog breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        ></input>
        <button onClick={search}>Search</button>
      </div>

      <div className="container">
        <div className="row">
          {dog.map((value) => {
            return (
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={value} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <button onClick={() => togglefav(value)}>
                    {fav.includes(value) ? 'unfav' : 'fav'}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h2>Favorites</h2>
        <div className="fav-container">
        {
            fav.map((value) => (
                <div>
                <img src={value} alt="" />
                <button onClick={() => togglefav(value)}></button>
                </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doge;
