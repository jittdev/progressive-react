import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants.js'

export const setSearchField = (text) => ({
  type: 'CHANGE_SEARCH_FIELD',
  payload: text
})

//created higher level function that contains a function but we had to add redux-thunk to see the returned function
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
}

// Action -> Middleware -> Reducer -> Store -> React -> Make Changes
