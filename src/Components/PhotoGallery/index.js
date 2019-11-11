import React, { Component } from 'react'
import { getPhotos, getPage } from '../../actions'
import { connect } from 'react-redux'
import PhotoGalleryView from './view'



class PhotoGallery extends Component {
  state = {
    currentPage: 1
  }

  onPageClick = (event) => {
    this.setState({ currentPage: Number(event.currentTarget.dataset.pagenumber) })
    console.log('value', event.currentTarget.dataset.pagenumber, 'page', this.props.pages)
    this.props.getPage(event.currentTarget.dataset.pagenumber)
    window.scrollTo(0, 0)
  }


  render() {

    return (
      <div>
        <PhotoGalleryView 
          photos={this.props.photos}
          searchTag={this.props.searchTag}
          onPageClick={this.onPageClick}
          currentPage={this.state.currentPage}
          pages={this.props.pages}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { 
    photos: state.photos,
    searchTag: state.searchTag,
    pages: state.pagination
   }
}

export default connect (mapStateToProps, { getPhotos, getPage })(PhotoGallery)