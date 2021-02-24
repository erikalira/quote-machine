import React from 'react';
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      randomNum: Math.floor(Math.random() * 8),
      quote: [
        ['Aim for the moon. If you miss, you may hit a star.','W. Clement Stone'],
        ['You don\'t have to be great to start, but you have to start to be great.','Zig Ziglar'],
        ['It does not matter how slowly you go as long as you do not stop','Confucius'],
        ['You cannot swim for new horizons until you have courage to lose sight of the shore','William Faulkner'],
        ['..Only when it is dark enough can you see the stars', 'Martin Luther King, Jr.'],
        ['Nothing will work unless you do.', 'Maya Angelou'],
        ["Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.","Marie Curie"],
        ["You miss 100% of the shots you don't take.","Wayne Gretzky"]
      ]
    }
    this.change = this.change.bind(this)
  }
  change(){
    this.setState({
      randomNum: Math.floor(Math.random() * 8)
    });
  }
  render(){
    const tweet = "https://twitter.com/intent/tweet?text=\"" + this.state.quote[this.state.randomNum][0] + "\" "+ this.state.quote[this.state.randomNum][1]
    
    return (
      <div id="quote-box">
        <h1 className='text' id='text'>{this.state.quote[this.state.randomNum][0]}</h1>
        <h3 className='text' id='author'>{this.state.quote[this.state.randomNum][1]}</h3>
        <button id='new-quote' onClick={this.change}>New Quote</button>
        <a target="_blank" href={tweet} id='tweet-quote'>Tweet Quote</a>
      </div>
    )
  }
}

export default App;
