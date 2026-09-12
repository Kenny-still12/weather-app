const api = import.meta.env.VITE_WEATHER_API;

export async function SearchCity(city) {

    console.log("it is running")
    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api}`)


        if (!response.ok) {
            throw new Error("failed to search for city")
        }

        const data = await response.json();

        if (data.length === 0) {
            throw new Error("City not found")
        };
        console.log(data)
        return data;

    } catch (err) {
        throw err
    }

}

export async function getWeatherByGeoLocation(lat, lon, measure) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${measure}&appid=${api}`)

        if (!response.ok) throw new Error("Failure to fetch weather data");

        return response.json();
    } catch (err) {
        throw err
    }


}