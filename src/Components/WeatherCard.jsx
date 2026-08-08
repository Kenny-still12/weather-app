export default function WeatherCard({ weatherResult }) {
    return (
        <div className="flex flex-col gap-3 items-center">
            <h1 className="text-center text-5xl text-gray-100">{weatherResult.data.name}, {weatherResult.data.sys?.country}</h1>
            <img src={`https://openweathermap.org/img/wn/${weatherResult.data.weather[0].icon}@2x.png`} alt="" className="w-40" />
            <h2 className="text-center text-3xl text-gray-200">{weatherResult.data.weather[0].description}</h2>
            <h2 className="text-center text-6xl text-gray-100">{weatherResult.data.main?.temp} °C</h2>
            <p className="text-center text-xl text-gray-300">Feels like {weatherResult.data.main?.feels_like} °C</p>
        </div>
    )
}