export const load = async ({ fetch }) => {

    const fetchWeather = async () => {   
        const weatherRes = await fetch('https://api.open-meteo.com/v1/forecast?latitude=43.7001&longitude=-79.4163&current=temperature_2m,relativehumidity_2m,is_day,precipitation,rain,showers,snowfall,weathercode,cloudcover,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,pressure_msl,surface_pressure,cloudcover,visibility,windspeed_10m,windgusts_10m,soil_temperature_0cm,soil_moisture_0_to_1cm')
        const weatherData = await weatherRes.json()
        return weatherData
    }

    return {
       weatherData: fetchWeather(),
    }
}
