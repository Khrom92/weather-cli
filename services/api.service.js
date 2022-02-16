import https from 'https'
import axios from "axios"

import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'

const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token)
    if (!token) {
        console.log("dewdccc");
        throw new Error('нет задан токен')
    }
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric',
        }
    })

    console.log(data.main.temp)

    // const url = new URL('https://api.openweathermap.org/data/2.5/weather')
    // url.searchParams.append('q', city)
    // url.searchParams.append('appid', token)
    // url.searchParams.append("lang", "ru")
    // url.searchParams.append("units", "metric")

    // https.get(url, (response) => {
    //     let res = '';
    //     response.on('data', chunk => {
    //         res += chunk;
    //     })

    //     response.on('end', () => {
    //         console.log(res)
    //     })
    // })
}

export { getWeather }