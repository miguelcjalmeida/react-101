import React from 'react'
import PropTypes from 'prop-types'
import TextInput from '../common/text-input'

class AuthorForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Manage Author</h1>
        <TextInput name="firstName"
          label="First Name"
          value={this.props.author.firstName}
          onChange={this.props.onChange} />
        
        <TextInput name="lastName"
          label="Last Name"
          value={this.props.author.lastName}
          onChange={this.props.onChange} />

        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    )
  }
}

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default AuthorForm
