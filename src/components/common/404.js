import React from 'react'
import PropTypes from 'prop-types'

class NoMatch extends React.Component {
  render() {
    return (
      <div>
        <h3>No match for <code>{location.pathname}</code></h3>
      </div>
    )
  }
}

NoMatch.propTypes = {
  location: PropTypes.object.isRequired
}

export default NoMatch
