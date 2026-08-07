import Form from "./Form.jsx"
import Result from "./Result.jsx"
import weatherApi from "./services/weatherApi.js";
import { useState } from "react"

export default function App() {

  const [city, setCity] = useState("");
  const [measure, setMeasure] = useState("metric")
  const [weatherResult, setWeatherResult] = useState({
    data: null,
    loading: false,
    error: null
  })

  async function handleRequest(e) {
    e.preventDefault();

    try {
      const data = await weatherApi(city, measure, { setWeatherResult });
      setWeatherResult({
        data: data,
        loading: false,
        error: null
      })
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
      />
    </>
  )
}
