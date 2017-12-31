import React from 'react'
import Header from './common/header'
import Main from './common/main'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <Main />
        </div>
      </div>
    )
  }
}

export default App