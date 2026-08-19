import logo from "./assets/meteorology.png"
import WeatherCard from "./Components/WeatherCard"
import Loading from "./Components/Loading.jsx"
import weatherMapper from "./utils/weatherMapper.js";
export default function Result({ weatherResult, city }) {
    const weatherData = weatherResult.data;
    const weatherIcons = weatherMapper;

    return (
        <>
            <div className="w-10/12 bg-linear-to-b from-blue-300 to-blue-700 m-auto rounded-md p-12">
                {!weatherData ?
                    <div className="flex flex-col justify-center items-center gap-12" >
                        <h1 className="text-center text-4xl text-gray-100">{
                            !weatherData
                                ? weatherResult.loading ? <Loading />
                                    : weatherResult.error
                                : weatherData.name
                        }</h1 >
                        <img
                            src={weatherIcons.defaultIcon}
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