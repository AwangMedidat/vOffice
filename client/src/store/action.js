import axios from 'axios'

export function setUserDetail (payload) {
  return (dispatch) => {
    dispatch({ type: 'USER/FETCHDATAUSER', payload })
  }
}

export function fetchDataDetail (payload) {
  return async (dispatch) => {
    try{
      const response = await fetch(`http://localhost:3001/users/${payload}`)
      const data = await response.json()
      dispatch(setUserDetail(data))
    }catch(err){
      console.log(err)
    }
  }
}

