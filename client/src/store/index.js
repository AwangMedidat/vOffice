import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialStateData = {
  data: [],
  dataDetail: {}
}

const initialStateBuild = {
  dataBuild: []
}

const reducerUser = (state = initialStateData, action ) => {
 switch (action.type) {
  case "USER/LOGIN":
    return { ...state, data: action.payload}
  case "USER/FETCHUSER":
    return { ...state, data: action.payload}
  case "USER/ADDUSER":
    return { ...state, data: [...state.data, action.payload] }
  case 'USER/FETCHDATAUSER':
    return {...state, dataDetail: action.payload}
  case "USER/EDITUSER":
    return { ...state, data: action.payload}
   default:
    return state;
 } 
}

const reducerBuild = (state = initialStateBuild, action ) => {
  switch (action.type) {
   case "BUILD/ADDBUILD":
     return { ...state, dataBuild: [...state.data, action.payload] }
    default:
     return state;
  } 
 }


const rootReducer = combineReducers({
  data: reducerUser,
  building: reducerBuild
})

const store = createStore(rootReducer, applyMiddleware(thunk))

console.log(store.getState())

export default store