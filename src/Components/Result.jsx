import { CircleAlert, Search } from "lucide-react";
import WeatherCard from "./WeatherCard.jsx"
import Loading from "./Loading.jsx"
import AdditionalInfo from "./AdditionalInfo.jsx";
import getWeatherTheme from "../utils/weatherTheme.js";

export default function Result({ weatherResult }) {
    const { data, loading, error } = weatherResult;
    const theme = getWeatherTheme(data?.weather?.[0]?.main);

    return (
        <section
            className={`mx-4 sm:mx-auto max-w-xl rounded-2xl border px-6 py-10 sm:px-8 ${theme.card} ${theme.text}`}
            style={{ backgroundImage: theme.pattern }}
        >
            {loading ? (
                <Loading />
            ) : error ? (
                <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
                    <CircleAlert className="mt-0.5 size-5 shrink-0" />
                    <div>
                        <p className="font-medium">Couldn't load the weather</p>
                        <p className="text-sm text-red-700">{error}</p>
                    </div>
                </div>
            ) : data ? (
                <>
                    <WeatherCard weatherResult={weatherResult} theme={theme} />
                    <AdditionalInfo weatherResult={weatherResult} theme={theme} />
                </>
            ) : (
                <div className="flex flex-col items-center gap-3 py-8 text-center">
                    <Search className={`size-8 ${theme.muted}`} strokeWidth={1.5} />
                    <p className="text-lg font-medium">Search for a city to see the weather</p>
                    <p className={`text-sm ${theme.muted}`}>Start typing above and pick a result.</p>
                </div>
            )}
        </section>
    )
}
