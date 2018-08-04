import React from 'react';
import '../App.css';

function Weather (props) {
  
    return (
      <div>
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
	 { 
	 	props.error && <p className="weather__error">not a valid city</p>  
	 }
      
      </div>
    ); 
}

export default Weather;
