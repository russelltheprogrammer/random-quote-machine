import './App.css';
import React from 'react';

class App extends React.Component {
constructor(props){
  super(props);
    this.state = {
      loading: true,
      quote: ""
  }
  this.handleClick = this.handleClick.bind(this);
}
  

  async componentDidMount() {
    const url = 'https://type.fit/api/quotes';
    const response = await fetch(url);
    const jsonData = await response.json();
    let randomIndex = Math.floor(Math.random() * jsonData.length);

    this.setState({quote: Object.values(jsonData[randomIndex]), loading: false })
    console.log(jsonData[randomIndex]);
  }

  handleClick(){
    this.setState({
      quote: "new quote"
    });
  };

  render() {
if (this.state.loading) {
  return <div>loading...</div>;
}

if (!this.state.quote) {
  return <div>No Quote!</div>;
}


    return (
<div>
      <wrapper className="centered" id="quote-box"> {/* wrapper is only used because FCC project asks for it */}

          <div className="row">
          <div className="col">
              
      <div id="text">"{this.state.quote[0]}"</div>
      </div>
      </div>
      <div className="row">
      <div className="col">
      <div id="author">~{this.state.quote[1]}</div>
      </div>
      </div>

      <div className="container">
      <div className="row">
          <div className="col">
              
      <button onClick = {this.handleClick} id="new-quote">Click For New Quote</button>
      
      </div>
      <div className="col">
      
      <a id="tweet-quote" href="twitter.com/intent/tweet" target="_top">Tweet Quote</a>
      
      </div>
      </div>
      </div>
   </wrapper>
   </div>
    );
  }
}


export default App;



