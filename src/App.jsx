import Form from "./Form.jsx"
import { useState } from "react"

export default function App() {

  const [weather, setWeather] = useState();


  return (
    <>
      <Form />
      <h1
        className="text-3xl m-auto text-center bold"
      >{!weather ? "Search city" : null}</h1>
    </>
  )
}
