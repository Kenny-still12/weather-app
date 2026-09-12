import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import Result from "./Components/Result.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import { getWeatherByGeoLocation } from "./services/weatherApi.js";
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

  // async function handleRequest(e) {
  //   e.preventDefault();

  //   if (!city.trim()) {
  //     setWeatherResult({
  //       data: null,
  //       loading: false,
  //       error: "Please enter a city"
  //     });

  //     return;

  //   }

  //   setWeatherResult({
  //     data: null,
  //     loading: true,
  //     error: null
  //   })

  //   try {
  //     const data = await weatherApi(city, measure,);

  //     setWeatherResult({
  //       data: data,
  //       loading: false,
  //       error: null
  //     })

  //   } catch (err) {
  //     setWeatherResult({
  //       data: null,
  //       loading: false,
  //       error: err.message
  //     })
  //     console.error(err)
  //   }
  // }

  async function handleSelectCity(cityObj) {
    setWeatherResult({ data: null, loading: true, error: null });
    try {
      const data = await getWeatherByGeoLocation(cityObj.lat, cityObj.lon, measure);
      setWeatherResult({ data: data, loading: false, error: null });
    } catch (err) {
      setWeatherResult({ data: data, loading: false, error: err.message })
    }
  }

  return (
    <>
      <div className="flex flex-col justify-between gap-2 h-screen">
        <div>
          <Header />
          <SearchBar
            setCity={setCity}
            //handleRequest={handleRequest}
            onSelectCity={handleSelectCity}
          />
          <Result
            weatherResult={weatherResult}
            city={city}
          />
        </div>
        <Footer />
      </div>
    </>
  )
}
