import React from 'react'

class Weather extends React.Component {
  render() {
    const { location, temperature, humidity, condition, error } = this.props
    return(
      <div>
        { error && <span className="weather__error">{error}</span>}
        { location && 
          <p className="weather__key">Location:  
            <span className="weather__value"> {location}</span>
          </p> 
        }
        { temperature && 
          <p className="weather__key">Temperature: 
            <span className="weather__value"> {temperature}</span>
          </p> 
        }        
        { humidity && 
          <p className="weather__key">Humidity: 
            <span className="weather__value"> {humidity}</span>
          </p> 
        }
        { condition && 
          <p className="weather__key">Condition: 
            <span className="weather__value"> {condition}</span>
          </p> 
        }
      </div>
    )
  }
}

export default Weather