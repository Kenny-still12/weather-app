import logo from "./assets/meteorology.png"
export default function Result({ weatherResult, city }) {
    return (
        <>
            <div className="w-11/12 bg-linear-to-b from-blue-300 to-blue-700 m-auto rounded-md p-12 flex flex-col justify-center items-center gap-12">
                <h1 className="text-center text-5xl text-gray-100">{!city ? "search city" : city}</h1>
                <img
                    src={logo}
                    alt="weather logo"
                    className="w-35"
                />
                {weatherResult ?
                    <div className="flex flex-col gap-4 items-center">
                        <h1 className="text-center text-4xl text-gray-100">{city}</h1>
                        <img src={logo} alt="" className="w-25" />
                        <h2 className="text-center text-8xl text-gray-100">{weatherResult.main?.temp} °C</h2>
                    </div>
                    : ""}

            </div>
        </>
    )
} 