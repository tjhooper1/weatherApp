import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Weather from './components/Weather';
import API_KEY from './config/Api';


class App extends Component {

  state = {
    country: undefined,
    city: undefined,
    temperature: undefined,
    condition: undefined,
    error: undefined 
  }
  
  updateWeather = async (e) => {
    e.preventDefault();
    
    
    let country = e.target.elements.country.value;
    let city = e.target.elements.city.value;
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY.API_KEY}`;

  const apiCall = await fetch(URL);
  const data = await apiCall.json();
  
  console.log(data);
  
  
  if(city && country){

    this.setState({
      country: data.sys.country,
      city: data.name,
      condition: data.weather[0].description,
      temperature: Math.floor((data.main.temp * 9/5) - 459.67),
      error: data.cod
    });
  }else{
    this.setState({
      country: undefined,
      city: undefined,
      condition: undefined,
      temperature: undefined,
      error: data.cod
    });
  }



  console.log(this.state);

};


  render() {
    return (
      <div className="App">
        <Title />
        <Weather 
        error = {this.state.error}
        country={this.state.country}
        city={this.state.city}
        condition={this.state.condition}
        temperature={this.state.temperature}
        updateWeather={this.updateWeather}
        />
        
      </div>
    );
  }
}



export default App;
