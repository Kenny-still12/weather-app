import logo from "./assets/meteorology.png"
import WeatherCard from "./Components/WeatherCard"
import Loading from "./Components/Loading.jsx"
export default function Result({ weatherResult, city }) {
    const weatherData = weatherResult.data;

    return (
        <>
            <div className="w-8/10 bg-linear-to-b from-blue-300 to-blue-700 m-auto rounded-md p-12">
                {!weatherData ?
                    <div className="flex flex-col justify-center items-center gap-12" >
                        <h1 className="text-center text-4xl text-gray-100">{
                            !weatherData
                                ? weatherResult.loading ? <Loading />
                                    : "Nothing to show here..."
                                : weatherData.name
                        }</h1 >
                        <img
                            src={logo}
                            alt="weather logo"
                            className="w-35"
                        />
                    </div >
                    :
                    <WeatherCard
                        weatherResult={weatherResult}
                    />
                }
            </div >


        </>
    )
} 