import React from 'react'
import HomePage from '../home/home-page'
import AboutPage from '../about/about-page'
import AuthorPage from '../authors/author-page'
import { Switch, Route, Redirect } from 'react-router-dom'
import NoMatch from './404'
import ManageAuthorPage from '../authors/manage-author-page'

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/authors" component={AuthorPage}></Route>
          <Route path="/author" component={ManageAuthorPage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Redirect from="/about-us" to="/about" />
          <Route component={NoMatch}></Route>
        </Switch>
      </main>
    )
  }
}

export default Main
