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
      {props.temperature && props.condition &&
        <div>
            <p>The temperature for {props.city} is: {props.temperature}℉</p>
            <p>The condition is: {props.condition}</p>
       </div>
      }
      
      </div>
    ); 
}

export default Weather;
