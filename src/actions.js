import request from 'superagent'

export const SET_PHOTOS = 'SET_PHOTOS'

function setPhotos(payload) {
  return{
    type: SET_PHOTOS,
    payload
  }
}

export const getPhotos = (tag) => dispatch => {  

  request('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6c116b8d53864e12de7b50956b88932e&format=json&nojsoncallback=1')
      .query(`per_page=5&tags=${tag}`)
      .then(response => {
        const action = setPhotos(response.body.photos.photo )
        dispatch(action)
      })
      .catch(console.error) 
}

export const SET_SEARCHTAG = 'SET_SEARCHTAG'

function setSearchTag(payload) {
  return {
    type: SET_SEARCHTAG,
    payload
  }
}

export const getSearchTag = (tag) => dispatch => {

  const action = setSearchTag(tag)
  dispatch(action)

}

