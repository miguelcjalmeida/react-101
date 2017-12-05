import React from 'react'

import bootstrap from 'bootstrap/dist/css/bootstrap.css'

class HomePage extends React.Component {
  render () {
    return (
      <div className={bootstrap.jumbotron}>
        <h1>
          React 101
          <small>First project in react.</small>
        </h1>
        <p>Just practicing.</p>
      </div>
    )
  }
}

export default HomePage