import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import {store, closeModal, openModal,addFavorite} from './store.js';
import { RandomQuoteApp } from './randomQuoteApp.js';



const MapStateToProps = (state)=>{
  return {favQuotes: state.favoriteQuotes, modal: state.modalManager.modal};
}
const MapDispatchToProps = (dispatch)=>{
  return {addQuote: (favQuote)=>dispatch(addFavorite(favQuote)),
         closeModal: ()=>dispatch(closeModal()),
         openModal: ()=>dispatch(openModal())
         };
}

const Container = connect(MapStateToProps, MapDispatchToProps)(RandomQuoteApp);
//defining Provider and Container 

class App extends React.Component{
  render(){
    return(
    <Provider store={store}>
      <Container />
    </Provider>
    )
  }
}

export {App};
