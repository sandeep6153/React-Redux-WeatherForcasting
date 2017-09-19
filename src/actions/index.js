import axios from 'axios'

const API_KEY='9491e67be272eef053e7863cff09b8db';
const API_URL=`http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER='FETCH_WEATHER';
export function fetchWeather(city){
    console.log(city)
    const url=`${API_URL}&q=${city},us`;
    const request =axios.get(url);
    console.log('Request',request)
    return{
        type:FETCH_WEATHER,
        payload:request
    }
}