import React from 'react'

class Title extends React.Component {
  render() {
    return(
      <div>
        <h1 className="title-container__title">Weather Finder</h1>
        <p className="title-container__subtitle">Find out temperature, condition and more...</p>
      </div>
    )
  }
}

export default Title