import Form from "./Form.jsx"
import { useState } from "react"

export default function App() {

  const [city, setCity] = useState("");
  const api = import.meta.env.WEATHER_API;

  function handleRequest() {
    fetch(`https://api.openweathermap.org/data/4.0/onecall/current?lat={lat}&lon={lon}&appid=${api}`)
      .then(res => res.json())
      .then(data => console.log(data))


  }


  return (
    <>
      <Form
        setCity={setCity}
      />
      <h1
        className="text-3xl m-auto text-center bold"
      >{!city ? "Search city" : city}</h1>
    </>
  )
}
