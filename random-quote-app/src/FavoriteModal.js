import React from "react";


class FavoritesModal extends React.Component{
    render(){
        return(
          <div className={`modal ${this.props.show ? 'show' : ''}`} onClick={this.props.action}>
            <div className="modal-content" onClick={(event)=>event.stopPropagation()}>
              <div className="modal-head">
                <h3 className="modal-title">List of Favorites Quotes!</h3>
              </div>          
              <div className="modal-body">
                <ul id="favorites-list">
                  {this.props.favQuotes.map((quotes,idx)=>{
                    return (<li key={idx}>"{quotes.quote}" - {quotes.author}</li>)
                    })}
                </ul> 
              </div>       
              <div className="modal-footer">
                <a className="button" id="close-button" onClick={this.props.action}><i id="close-icon" class="fas fa-times fa-4x"></i></a>
              </div>
            </div>
          </div>
        )
    }
  };

  export {FavoritesModal};