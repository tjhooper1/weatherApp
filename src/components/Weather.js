import React from 'react';
import '../App.css';

function Weather (props) {
  
    return (
      <div className="form">
      <form onSubmit={props.updateWeather}>
          <input type="text" name="city" placeholder="city"/>
          <input type="text" name="country" placeholder="country"/>
          <button>submit</button>
      </form>
      {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { props.temperature }	</span>
	 	</p> 
	 }
	 
	 { 	
	 	props.condition && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { props.condition } </span>
	 </p> 
	 }
	 
      </div>
    ); 
}

export default Weather;
