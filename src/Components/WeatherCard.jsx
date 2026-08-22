import weatherMapper from "../utils/weatherMapper.js";
export default function WeatherCard({ weatherResult }) {

    const data = weatherResult.data;
    const condition = data?.weather?.[0]?.main
    const weatherIcons = weatherMapper;

    return (
        <div className="flex flex-col items-start">
            <h1 className="text-4xl text-gray-100 mb-2">{data.name}</h1>
            <h2 className="text-3xl text-gray-200 mb-3">{data.sys?.country}</h2>
            <img src={weatherIcons[condition] || `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" className="w-40" />
            <h2 className="text-5xl text-gray-100 mt-3 mb-3.5">{data.main?.temp} °C</h2>
            <h2 className="text-xl text-gray-300">{data.weather[0].description}</h2>
            <p className="text-lg text-gray-300">Feels like {data.main?.feels_like} °C</p>
        </div>
    )
}