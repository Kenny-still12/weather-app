import Header from "./Components/Header.jsx";
import Result from "./Result.jsx"
import SearchBar from "./Components/SearchBar.jsx";
import weatherApi from "./services/weatherApi.js";
import { useState } from "react"

export default function App() {

  // <a href="https://www.flaticon.com/free-icons/weather" title="weather icons">Weather icons created by iconixar - Flaticon</a> for attribute 

  const [city, setCity] = useState("");
  const [measure, setMeasure] = useState("metric")
  const [weatherResult, setWeatherResult] = useState({
    data: null,
    loading: false,
    error: null
  })

  async function handleRequest(e) {
    e.preventDefault();

    setWeatherResult({
      data: null,
      loading: true,
      error: null
    })

    try {
      const data = await weatherApi(city, measure,);

      setWeatherResult({
        data: data,
        loading: false,
        error: null
      })

    } catch (err) {
      setWeatherResult({
        data: null,
        loading: false,
        error: err
      })
      console.error(err)
    }
  }

  return (
    <>
      <Header />
      <SearchBar
        setCity={setCity}
        handleRequest={handleRequest}
      />
      <Result
        weatherResult={weatherResult}
        city={city}
      />
    </>
  )
}
