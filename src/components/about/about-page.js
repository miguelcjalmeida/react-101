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
          <li className="list-group-item">Rollup</li>
          <li className="list-group-item">NodeJS</li>
          <li className="list-group-item">Npm</li>
        </ul>
      </div>
    )
  }
}

export default About