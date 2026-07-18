import Form from "./Form.jsx"
import { useState } from "react"

export default function App() {

  const [city, setCity] = useState("");

  function handleRequest() {
    fetch

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
