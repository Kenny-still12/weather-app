const api = import.meta.env.VITE_WEATHER_API;

export default async function weatherApi(city, measure) {

    console.log("it is running")
    try {
        const geoRes = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api}`)


        if (!geoRes.ok) {
            throw new Error("failed to search for city")
        }

        const geoData = await geoRes.json();

        if (geoData.length === 0) {
            throw new Error("City not found")
        }

        const { lat, lon } = geoData[0];

        const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${measure}&appid=${api}`)

        if (!weatherRes.ok) {
            throw new Error("Failure to fetch weather data")
        }

        const weatherData = await weatherRes.json();
        console.log(weatherData);
        return weatherData;

    } catch (err) {
        throw err
    }

}