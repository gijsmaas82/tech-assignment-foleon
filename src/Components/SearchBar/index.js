import React, { Component } from 'react'
import SearchBarView from './view'
import { getPhotos } from '../../actions'
import { connect } from 'react-redux'


class SearchBar extends Component {
  state = {
    tag: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.getPhotos(this.state.tag)
  }
  render() {
    return (
      <div>
        <SearchBarView 
          values={this.state}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default connect (null, { getPhotos })(SearchBar)
