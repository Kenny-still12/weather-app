export default function WeatherCard({ weatherResult }) {

    const data = weatherResult.data;

    return (
        <div className="flex flex-col gap-3 items-center">
            <h1 className="text-center text-5xl text-gray-100">{data.name}, {data.sys?.country}</h1>
            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" className="w-40" />
            <h2 className="text-center text-3xl text-gray-200">{data.weather[0].description}</h2>
            <h2 className="text-center text-6xl text-gray-100">{data.main?.temp} °C</h2>
            <p className="text-center text-xl text-gray-300">Feels like {data.main?.feels_like} °C</p>
        </div>
    )
}