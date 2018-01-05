import React from 'react'
import AuthorForm from './author-form'
import AuthorAPI from '../../api/author-api'
import PropTypes from 'prop-types'
import toastr from 'toastr'

class ManageAuthorPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: {
        id: '',
        firstName: '',
        lastName: ''
      },
      errors: {}
    }
  }

  setAuthorState(event) {
    return this.setState({
      author: {
        ...this.state.author,
        [event.target.name]: event.target.value
      }
    })
  }

  saveAuthor(event) {
    event.preventDefault()

    if(!this.authorFormIsValid()) 
      return false

    AuthorAPI.saveAuthor(this.state.author)
    toastr.success('Author saved successfully')
    this.props.history.push('/authors')
  }

  authorFormIsValid() {
    let errors = {}

    if (this.state.author.firstName.length < 3)
      errors.firstName = 'First name must be at least 3 characters'

    if (this.state.author.lastName.length < 3)
      errors.lastName = 'Last name must be at least 3 characters'

    this.setState({errors: errors})

    return Object.getOwnPropertyNames(errors).length == 0
  }

  render() {
    return (
      <AuthorForm
        author={this.state.author}
        errors={this.state.errors}
        onChange={this.setAuthorState.bind(this)}
        onSave={this.saveAuthor.bind(this)}/>
    )
  }
}

ManageAuthorPage.propTypes = {
  history: PropTypes.object.isRequired
}

export default ManageAuthorPage
