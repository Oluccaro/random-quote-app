
import { combineReducers } from "@reduxjs/toolkit";
import { createStore } from "@reduxjs/toolkit";




const ADD_FAVORITE = 'ADD_FAVORITE';
//modal reducer creation
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

const defaultModal = {modal:false};

const openModal = () =>{
  return ({type:OPEN_MODAL, payload: true});
};

const closeModal = () => {
  return({type: CLOSE_MODAL, payload: false});
};

const modalReducer = (state = defaultModal, action) =>{
  switch(action.type){
    case OPEN_MODAL:
      return {...state,modal: action.payload};
    case CLOSE_MODAL:
      return {...state, modal: action.payload};
    default:
      return state;
  }
};

const addFavorite = (favQuote) => {
  return {type: ADD_FAVORITE, favoriteQuote: {...favQuote}};
};

//Creating a Redux reducer to store my favorite Quotes ;D
const initialState= []
const favReducer = (state=initialState, action)=>{
  switch(action.type){
    case ADD_FAVORITE:
      return [...state,action.favoriteQuote];
    default:
      return state
  }  
}
//creating redux store
const combinedReducer = combineReducers({favoriteQuotes: favReducer, modalManager: modalReducer});

const store = createStore(combinedReducer);

export {store, addFavorite,openModal,closeModal};