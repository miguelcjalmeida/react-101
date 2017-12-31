import React from 'react'
import HomePage from '../home/home-page'
import AboutPage from '../about/about-page'
import AuthorPage from '../authors/author-page'
import { Switch, Route } from 'react-router-dom'

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/authors" component={AuthorPage}></Route>
          <Route path="/about" component={AboutPage}></Route>
        </Switch>
      </main>
    )
  }
}

export default Main