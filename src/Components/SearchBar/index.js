import React, { Component } from 'react'
import SearchBarView from './view'
import { getPhotos, getSearchTag } from '../../actions'
import { connect } from 'react-redux'


class SearchBar extends Component {
  state = {
    tag: ''
  }

  onChange = (event) => {
    this.setState({
      tag: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.getSearchTag(this.state.tag)
    this.props.getPhotos(this.state.tag)
    this.setState({ tag: '' })
  }
  render() {
    return (
      <div>
        <SearchBarView 
          tag={this.state.tag}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default connect (null, { getPhotos, getSearchTag })(SearchBar)
