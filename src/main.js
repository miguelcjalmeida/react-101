import React from 'react'
import ReactDOM from 'react-dom'
import './app.css'
import HomePage from './components/home/home-page'
import About from './components/about/about-page'
import Header from './components/common/header'
import Authors from './components/authors/authorPage'
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component {
  render() {
    let Child
    let route = this.props.route

    switch (route) {
      case "about":
        Child = About
        break

      case "authors":
        Child = Authors
        break

      default:
        Child = HomePage
    }

    return (
      <div>
        <Header />
        <Child route={route} />
      </div>
    )
  }
}

window.addEventListener("hashchange", () => {
  let route = window.location.hash.substr(1)
  render(route)
})

render()

function render(route) {
  ReactDOM.render(
    <App route={route} />,
    window.document.getElementById('app')
  )
}
