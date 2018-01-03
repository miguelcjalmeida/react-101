import React from 'react'
import AuthorApi from '../../api/author-api'
import AuthorList from './author-list'
import {Link} from 'react-router-dom'

class AuthorPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authors: []
    }
  }

  componentDidMount() {
    this.setState({ authors: AuthorApi.getAllAuthors() })
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <Link className="btn btn-primary" to="/author">Add Author</Link>
        <AuthorList authors={this.state.authors} />
      </div>
    )
  }
}

export default AuthorPage
