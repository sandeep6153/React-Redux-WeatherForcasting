import React,{Component} from 'react';
import {connect} from 'react-redux'
import WeatherChart from '../components/chart'
import GoogleMap from '../components/google_map'
class WeatherList extends Component{
    renderWeather(cityData){
        const temps=cityData.list.map(weather=>weather.main);
        const {lon,lat}=cityData.city.coord;
        return(
            <tr key={cityData.city.name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td>
                    <WeatherChart data={temps} keyToDisplay='temp'/>   
                </td>
                <td>
                    <WeatherChart data={temps} keyToDisplay='pressure'/>   
                </td>
                <td>
                    <WeatherChart data={temps} keyToDisplay='humidity'/>   
                </td>
            </tr>
        )
    }
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}
function mapStateToProps({weather}){
    return {weather}
}
export default connect(mapStateToProps)(WeatherList)