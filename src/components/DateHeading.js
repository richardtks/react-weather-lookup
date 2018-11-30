import React from 'react'
import dayjs from 'dayjs'

class DateHeading extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentDate: undefined,
      intervalID: 0,
    }
  }

  componentDidMount() {
    const intervalID = setInterval(() => {
      this.setState({
        currentDate: dayjs().format('YYYY/MM/DD hh:mm a dddd'),
      })
    }, 1000)

    this.setState({...this.state, intervalID})
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID)
    this.setState({...this.state, intervalID: 0})
  }

  render() {
    return(
      <div><h2 className="date-heading__title">{this.state.currentDate}</h2></div>
      
    )
  }
}

export default DateHeading