import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>Technologies</h1>
        <ul className={bootstrap.listGroup}>
          <li className={bootstrap.listGroupItem}>React</li>
          <li className={bootstrap.listGroupItem}>React-Router</li>
          <li className={bootstrap.listGroupItem}>Flux</li>
          <li className={bootstrap.listGroupItem}>Rollup</li>
          <li className={bootstrap.listGroupItem}>NodeJS</li>
          <li className={bootstrap.listGroupItem}>Npm</li>
        </ul>
      </div>
    )
  }
}

export default About