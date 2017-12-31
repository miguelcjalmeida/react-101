import React from 'react'
import PropTypes from 'prop-types'

class AuthorList extends React.Component {
  render() {
    let createAuthorRow = (author) => {
      return (
        <tr key={author.id}>
          <td><a href={`/#authors/${author.id}`}></a>{author.id}</td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      )
    }

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    )
  }
}

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
}

export default AuthorList
