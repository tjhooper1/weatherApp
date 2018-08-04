import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Weather from './components/Weather';



class App extends Component {

  state = {
    country: "",
    city: "",
    temperature: "",
    condition: "" 
  }
  
  updateWeather = async (e) => {
    e.preventDefault();
    
    const API_KEY = '35b132f4fe91687cfbf36ff39dd7054c';
    let country = e.target.elements.country.value;
    let city = e.target.elements.city.value;
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;

  const apiCall = await fetch(URL);
  const data = await apiCall.json();
  console.log(data);
  
  let condition = data.weather[0].description;
  let temperature = Math.floor((data.main.temp * 9/5) - 459.67);

  this.setState({
    country: country,
    city: city,
    condition: condition,
    temperature: temperature
  });
  console.log(this.state);

};

  render() {
    return (
      <div className="App">
        <Title />
        <Weather 
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
