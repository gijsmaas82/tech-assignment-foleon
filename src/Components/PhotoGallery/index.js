import React, { Component } from 'react'
import request from 'superagent'

export default class PhotoGallery extends Component {
  state = {
    photos: null
  }

  componentDidMount() {

    const photos = 10

    request('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6c116b8d53864e12de7b50956b88932e&format=json&nojsoncallback=1')
      .query(`per_page=${photos}&tags=girls`)
      .then(response => {
        this.setState({ photos: response.body.photos.photo })
        console.log('state:', this.state.photos)
      })
      .catch(console.error)
  }

  render() {
    return (
      <div>
        <h1> Photo's </h1>
        {!this.state.photos && '...loading'}
        <div>{this.state.photos && 
          this.state.photos.map(photo => {
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
