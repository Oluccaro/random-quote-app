import React from "react";
import { FavoritesModal } from "./FavoriteModal.js";
import quotesDataEng from './quotesENG.json';
import quotesDataPtBr from './quotesPTBR.json';
import './icons8-twitter.gif'; 
import twitter from './twitter-logo.svg'; 
import heart from './heart-icon.svg';
import list from './list-icon.svg';

let myQuotes= {...quotesDataEng};
let bgColor = ['#2A231F','#003961','#442A36','#333','#802121','#F1EDC2','#8B7E66','#8B7B8B','#708090','#CD6839','#71C671']


class RandomQuoteApp extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        currentQuote: {...myQuotes.quotes[this.getIndex()]},
        isEng: false, 
        lang: 'ENG',
        counter: 0,
        backColor: bgColor[0]
      };
      this.getIndex = this.getIndex.bind(this);
      this.getQuote = this.getQuote.bind(this);  
      this.handleTweet = this.handleTweet.bind(this);
      this.changeLang = this.changeLang.bind(this);
      this.addFav = this.addFav.bind(this);
    }  
    addFav(){
      this.props.addQuote(this.state.currentQuote);
    }
    getIndex(){
      this.setState((state)=>({counter: state.counter+1}));
      let ind = Math.floor(Math.random()*myQuotes.quotes.length);
      return ind
    }
    getQuote(){
      let i = this.getIndex();
      //little easter egg
      if(this.state.counter == 4 && this.state.lang=='ENG'){
        i = 3;
      }
      let newQuote = {...myQuotes.quotes[i]};
      this.setState({currentQuote: {...newQuote}});
      let bi=0;
      bi = Math.floor(Math.random()*bgColor.length);
      let elem1=document.getElementsByTagName("HTML")[0];
      elem1.style.backgroundColor = bgColor[bi];
      let elem2 = document.getElementById("left-quote");
      elem2.style.color = bgColor[bi];
      let elem3 = document.getElementById("root");
      elem3.style.backgroundColor = bgColor[bi];
      console.log(bgColor[bi]);
    }
    handleTweet(){
      let tweetLink = `https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(this.state.currentQuote.quote + '\n - ' + this.state.currentQuote.author)}`;
      console.log("Lets tweet!");
      return tweetLink;
    }
    changeLang(){
      this.setState((state)=>({
        isEng: !state.isEng
      }));
      if(this.state.isEng){
        myQuotes = {...quotesDataEng};
        this.getQuote();
        this.setState({lang:'ENG'})
      };
      if(!this.state.isEng){
        myQuotes={...quotesDataPtBr};
        this.getQuote();
        this.setState({lang:'PT-BR'})
      }
    }
    render(){
      console.error();
      return(
        <div id='quote-box'>
          <div id='quote-display'>
            <div id='text'><h1><i class="fas fa-quote-left" id="left-quote"></i>{this.state.currentQuote.quote}</h1></div>
            <div id='author'> <h3> - {this.state.currentQuote.author}</h3></div>
          </div>
          <div id="buttons-wrapper">
            <button onClick={this.getQuote} id="new-quote" title="Get a new quote!">New Quote!</button>
            <a href={this.handleTweet()} id='tweet-quote' target="_top"class="twitter-share-button" title="Tweet this!"><img src={twitter} width="50" height="50" padding="5"/></a>
            <div id="switch-container"> 
              {this.state.lang=='ENG'? <img id="icon-container-on" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1024px-United-states_flag_icon_round.svg.png"/>:<img id="icon-container-off" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1024px-United-states_flag_icon_round.svg.png"/>}
              <label class="switch">
                <input type= "checkbox" onClick={this.changeLang} />
                <span class="slider round"></span>
              </label>
              {this.state.lang=='PT-BR'? <img id="icon-container-on" src="https://cdn.countryflags.com/thumbs/brazil/flag-400.png"/> : <img id="icon-container-off" src="https://cdn.countryflags.com/thumbs/brazil/flag-400.png"/>}
            </div>
            <button id="favorite-button" title="Favorite this quote!" onClick={this.addFav}><img src={heart} width="50" height="50" padding="5"/></button>
            <button id="show-modal" title="Display favorite quotes!" onClick={this.props.openModal}><img src={list} width="50" height="50" padding="5"/></button>
          </div>
          <FavoritesModal show={this.props.modal} action={this.props.closeModal} favQuotes={this.props.favQuotes}/>
        </div>
      )
    }
}

export {RandomQuoteApp}