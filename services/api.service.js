import axios from 'axios'
import { getKeyValue, tokenDictionary } from './storage.service.js'

const getWeather = async (city) => {
    const token = await getKeyValue(tokenDictionary.token)

    if(!token){
        throw new Error('Не задан ключ API')
    }
    
    const { data } = await axios.get('https://api.openweathermap.org/geo/1.0/direct', {
        params: {
            q: city,
            appid: token
        }
    })

    const lat = data[0].lat
    const lon = data[0].lon
    const name = data[0].local_names.ru

    const weatherData = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat: lat,
            lon: lon,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    })

    const description = weatherData.data.weather[0].description
    const temp = weatherData.data.main.temp

    const weather = `${name}: ${temp}C ${description}`
    return weather
}

export { getWeather }