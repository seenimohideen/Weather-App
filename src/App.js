import axios from "axios";
import { useState } from "react";

function App() {
  const [deg, setDeg] = useState("0");
  const [city, setCity] = useState("");
  const [desc, setDesc] = useState("");
  const [enteredValue, setEnteredValue] = useState("");

  function handleInput(event) {
    setEnteredValue(event.target.value);
  }

  function getData() {
    var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredValue}&appid=ee949cc184264765ad2f53c854eb1a81`);

    weather
      .then(function(dalta) {
        const celsius = (dalta.data.main.temp - 273.15).toFixed(2);

        setDeg(celsius);
        setDesc(dalta.data.weather[0].main);
        setCity(dalta.data.name);
      })
      .catch(() => {
        alert("City not found!");
      });
  }

  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", 
        fontFamily: "Arial, sans-serif"
        
      }}
    >
      <div style={{
        background: "rgba(255, 255, 255, 0.2)",
        padding: "30px",
        borderRadius: "30px",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(8px)",
        textAlign: "center",
        color: "white",
        minWidth: "300px"
      }}>
        <h1 style={{ fontSize: "2em", marginBottom: "10px",color:"rgba(165, 131, 37, 0.98)" }}>🌤️ Weather App</h1>
        <input
          type="text"
          placeholder="City Name?"
          onChange={handleInput}
          style={{
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            marginTop: "10px",
            width: "80%",
            outline: "none",
            color:"white",
            background:"#f2f1f168",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)"
          }}
        />
        <br />
        <button
          onClick={getData}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            background: "#ffffff5e",
            color: "#4b89adda",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow:"100px"
          }}
        >
          Get Report
        </button>
        <div style={{background:"#ffffff55",borderRadius:"30px",boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)"}}>
          <p style={{ marginTop: "20px", fontSize: "1.3em" , color:"black",paddingTop: "20px",
            borderRadius: "70px",
            border: "none", backgroundSize:"cover",}}>
            Celcius: {deg}°C 
        </p>
        <p style={{ marginTop: "20px", fontSize: "1.3em" , color:"black",paddingTop:"20px",
            borderRadius: "70px",
            border: "none",}}>
            City: {city} 
        </p>
        <p style={{ marginTop: "20px", fontSize: "1.3em" , color:"black",padding: "20px",
            borderRadius: "70px",
            border: "none",}}>
             Weather: {desc}
        </p>
        </div>
      </div>
    </div>
  );
}

export default App;
