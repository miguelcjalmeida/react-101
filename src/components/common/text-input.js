import React from 'react'
import PropTypes from 'prop-types'

class TextInput extends React.Component {
  validationClass() {
    const hasError = this.props.error && this.props.error.length > 0
    return hasError ? "has-danger" : "has-success" //"has-warning"
  }

  componentDidMount() {
    if(this.props.focusOnLoad)
      this.textInput.focus()
  }

  render() {
    return (
      <div className={`form-group ${this.validationClass()}`}>
        <label htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <input 
          type="text"
          name={this.props.name}
          className="form-control"
          placeholder={this.props.placeholder}
          ref={c => this.textInput = c}
          value={this.props.value}
          onChange={this.props.onChange} />
        <div className="form-control-feedback">
          {this.props.error}
        </div>
      </div>
    )
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  focusOnLoad: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

export default TextInput
