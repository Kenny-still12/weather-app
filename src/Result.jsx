import logo from "./assets/meteorology.png"
export default function Result({ weatherResult, city }) {
    return (
        <>
            <div className="w-11/12 bg-linear-to-b from-blue-300 to-blue-700 m-auto rounded-md p-12">
                {!weatherResult.data ?
                    <div className="flex flex-col justify-center items-center gap-12" >
                        <h1 className="text-center text-4xl text-gray-100">{
                            !weatherResult.data
                                ? weatherResult.loading ? "loading..."
                                    : "Nothing to show here..."
                                : weatherResult.data.name
                        }</h1 >
                        <img
                            src={logo}
                            alt="weather logo"
                            className="w-35"
                        />
                    </div >
                    :
                    <div className="flex flex-col gap-3 items-center">
                        <h1 className="text-center text-5xl text-gray-100">{weatherResult.data.name}, {weatherResult.data.sys?.country}</h1>
                        <img src={`https://openweathermap.org/img/wn/${weatherResult.data.weather[0].icon}@2x.png`} alt="" className="w-40" />
                        <h2 className="text-center text-3xl text-gray-200">{weatherResult.data.weather[0].description}</h2>
                        <h2 className="text-center text-6xl text-gray-100">{weatherResult.data.main?.temp} °C</h2>
                        <p className="text-center text-xl text-gray-300">Feels like {weatherResult.data.main?.feels_like} °C</p>
                    </div>
                }
            </div >


        </>
    )
} 