import React from 'react'
import AuthorForm from './author-form'

class ManageAuthorPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: {
        id: '',
        firstName: '',
        lastName: ''
      }
    }
  }

  componentDidMount() {
    //    this.setState({ authors: AuthorApi.getAllAuthors() })
  }

  setAuthorState(event) {
    return this.setState({
      author: {
        ...this.state.author,
        [event.target.name]: event.target.value
      }
    })
  }

  render() {
    return (
      <AuthorForm author={this.state.author} onChange={this.setAuthorState.bind(this)} />
    )
  }
}

export default ManageAuthorPage
