import React, { Component } from 'react'
import { getPhotos } from '../../actions'
import { connect } from 'react-redux'
import PhotoGalleryView from './view'



class PhotoGallery extends Component {

  render() {

    return (
      <div>
        <PhotoGalleryView 
          photos={this.props.photos}
          searchTag={this.props.searchTag}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { 
    photos: state.photos,
    searchTag: state.searchTag
   }
}

export default connect (mapStateToProps, { getPhotos })(PhotoGallery)