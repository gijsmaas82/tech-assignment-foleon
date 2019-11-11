import request from 'superagent'
const { url } = require('./constants')

export const SET_PHOTOS = 'SET_PHOTOS'

function setPhotos(payload) {
  return{
    type: SET_PHOTOS,
    payload
  }
}

export const getPhotos = (tag) => dispatch => {  

  request(`${url}`)
      .query(`per_page=10&tags=${tag}`)
      .then(response => {
        const action = setPhotos(response.body.photos.photo)
        dispatch(action)
        const pages = setPagination(response.body.photos.pages)
        dispatch(pages)
      })
      .catch(console.error) 
}

export const SET_PAGE = 'SET_PAGE'

function setPage(payload) {
  return {
    type: SET_PAGE,
    payload
  }
}

export const getPage = (pageNumber) => (dispatch, getState) => {  
  const state = getState()
  const { searchTag } = state

  request(`${url}`)
      .query(`page=${pageNumber}&tags=${searchTag}&per_page=10`)
      .then(response => {
        const action = setPage(response.body.photos.photo)
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

export const SET_PAGINATION = 'SET_PAGINATION'

function setPagination(payload) {
  return {
    type: SET_PAGINATION,
    payload
  }
}
