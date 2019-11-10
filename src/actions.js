import request from 'superagent'

export const SET_PHOTOS = 'SET_PHOTOS'

function setPhotos(payload) {
  return{
    type: SET_PHOTOS,
    payload
  }
}

export const getPhotos = () => dispatch => {  

  request('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6c116b8d53864e12de7b50956b88932e&format=json&nojsoncallback=1')
      .query(`per_page=10&tags=women`)
      .then(response => {
        const action = setPhotos(response.body.photos.photo )
        dispatch(action)
      })
      .catch(console.error)

  
}

