import React, { Component } from 'react'
import { getPhotos } from '../../actions'
import { connect } from 'react-redux'


class PhotoGallery extends Component {

  componentDidMount() {

    this.props.getPhotos()
  }

  render() {

    

    return (
      <div>
        <h1> Photo's </h1>
        {!this.props.photos && '...loading'}
        <div>{this.props.photos && 
          this.props.photos.map(photo => {
            return <div key={photo.id}>
              <p>{photo.title}</p>
              <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="pic" />
              </div>
          })
        }</div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { photos: state.photos }
}

export default connect (mapStateToProps, { getPhotos })(PhotoGallery)