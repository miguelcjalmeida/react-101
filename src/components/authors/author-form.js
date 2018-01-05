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
          focusOnLoad={true}
          error={this.props.errors.firstName}
          onChange={this.props.onChange} />

        <TextInput name="lastName"
          label="Last Name"
          value={this.props.author.lastName}
          error={this.props.errors.lastName}
          onChange={this.props.onChange} />

        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.props.onSave}>
          Save
        </button>
      </form>
    )
  }
}

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
}

export default AuthorForm
