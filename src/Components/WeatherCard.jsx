import { MapPin } from "lucide-react";
import weatherMapper from "../utils/weatherMapper.js";

export default function WeatherCard({ weatherResult, theme }) {

    const data = weatherResult.data;
    const weather = data.weather[0];
    const description = weather.description.charAt(0).toUpperCase() + weather.description.slice(1);

    return (
        <div className="flex flex-col items-center text-center">
            <p className={`flex items-center gap-1.5 text-sm font-medium ${theme.muted}`}>
                <MapPin className="size-4" />
                {data.name}{data.sys?.country && `, ${data.sys.country}`}
            </p>
            <img
                src={weatherMapper[weather.main] || `https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt={weather.description}
                className="mt-6 w-28"
            />
            <p className="mt-4 text-7xl font-semibold tracking-tight">
                {Math.round(data.main?.temp)}°
            </p>
            <p className="mt-2 text-lg">{description}</p>
            <p className={`text-sm ${theme.muted}`}>Feels like {Math.round(data.main?.feels_like)}°</p>
        </div>
    )
}
