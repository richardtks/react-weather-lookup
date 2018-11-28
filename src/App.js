import React from 'react';

import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = '7928882913cf781b13947b4aba9f8a90'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      location: undefined,
      temperature: undefined,
      humidity: undefined,
      condition: undefined,
      error: '',
    }
  }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    if( city && country ) {
      const openWeatherRequest = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
      )
    
      const data = await openWeatherRequest.json()
      
      this.setState({
        location: `${data.name}, ${data.sys.country}`,
        temperature: data.main.temp.toString(),
        humidity: data.main.humidity.toString(),
        condition: data.weather[0].description,
        error: '',
      })
    }
    else {
      this.setState({
        location: undefined,
        temperature: undefined,
        humidity: undefined,
        condition: undefined,
        error: 'Please enter city and country',
      })
    }
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xs-5 title-container">
              <Title />
            </div>
            <div className="col-xs-7 form-container">
              <Form sendWeatherRequest={this.getWeather}/>
              <Weather {...this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
