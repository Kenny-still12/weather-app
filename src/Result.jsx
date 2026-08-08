import logo from "./assets/meteorology.png"
import WeatherCard from "./Components/WeatherCard"
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
                    <WeatherCard
                        weatherResult={weatherResult}
                    />
                }
            </div >


        </>
    )
} 