import Form from "./Form.jsx"
import Result from "./Result.jsx"
import { useState } from "react"

export default function App() {

  const [city, setCity] = useState("");
  const [measure, setMeasure] = useState("metric")
  const [weatherResult, setWeatherResult] = useState(null)
  const api = import.meta.env.VITE_WEATHER_API;


  async function handleRequest(e) {
    e.preventDefault();

    try {
      console.log("it is running")
      const geoRes = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&&appid=${api}`)
      const geoData = await geoRes.json();
      if (geoData.length === 0) {
        throw new Error("City not found")
      }

      const { lat, lon } = geoData[0];

      const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${measure}&appid=${api}`)
      const weatherData = await weatherRes.json();
      console.log(weatherData)
      setWeatherResult(weatherData)

    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <Form
        setCity={setCity}
        handleRequest={handleRequest}
      />
      <Result
        weatherResult={weatherResult}
        city={city}
        weatherResult={weatherResult}
      />
    </>
  )
}
