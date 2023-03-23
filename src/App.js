import Homepage from "./components/Homepage";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./App.css";

function App() {
  const [player, setPlayers] = useState(null);
  // const params = useParams()
  // console.log(params)

  const options = {
    method: "GET",
    url: "https://api-nba-v1.p.rapidapi.com/players/1/2021",
    // params: { team: "1", season: "2021" },
    headers: {
      "X-RapidAPI-Key": "8097937983msh78221baa39a4300p1348eejsn1206eeef4421",
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });


  useEffect(() => {
     const getPlayers = async () => {
    try {
      const res = await axios.get(options.url);
      setPlayers(res.data);
    } catch (e) {
      console.error(e);
    }
  };
    getPlayers();
  }, []);

  return (
    <div className="App">
      <section>
        {player && player.map((player, index) => (
          <Homepage key={index} player={player}/> 
        ))}
      </section>
    </div>
  );
}

export default App;
