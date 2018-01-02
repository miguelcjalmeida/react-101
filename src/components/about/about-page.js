import React from 'react'

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>Technologies</h1>
        <ul className="list-group">
          <li className="list-group-item">React</li>
          <li className="list-group-item">React-Router</li>
          <li className="list-group-item">Flux</li>
          <li onClick={this.navigateToAuthors.bind(this)} className="list-group-item">Rollup (click to go to authors)</li>
          <li onClick={this.navigateBackward.bind(this)} className="list-group-item">NodeJS (click to go back)</li>
          <li onClick={this.navigateForward.bind(this)} className="list-group-item">Npm (click to go forward)</li>
        </ul>
      </div>
    )
  }

  navigateToAuthors() {
    this.props.history.push('/authors')
  }

  navigateForward(){
    this.props.history.goForward()
  }

  navigateBackward(){
    this.props.history.goBack()
  }
}

export default About
