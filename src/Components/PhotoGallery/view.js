import React, { Component } from 'react'
import { Figure, Spinner, Jumbotron } from 'react-bootstrap'

export default class PhotoGalleryView extends Component {
  render() {
    return (
      <div >
        {!this.props.photos && !this.props.searchTag && 
          <Jumbotron fluid style={{ display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h3>Welcome to this Photo Search App</h3>
            <p>Please type something that you are interested in and start searching for cool images</p>

          </Jumbotron>
        }
        {!this.props.photos && this.props.searchTag &&
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        }
        {this.props.photos && 
            <div>
              <Jumbotron fluid style={{ display:"flex", justifyContent:"center"}}>
                <h3>Results for {this.props.searchTag}</h3>

              </Jumbotron>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center"}}>{this.props.photos.map(photo => {
            return <Figure>
              <Figure.Image rounded width={500}
              src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="pic" />
            </Figure>
          })}</div></div>
          
        }
        
      </div>
    )
  }
}
