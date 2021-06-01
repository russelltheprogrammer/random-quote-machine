import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      quote: "",
      author: ""
      };
      this.handleClick = this.handleClick.bind(this);
  }

/*
function FetchAPI() {

  const apiGet = () => {
    fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((json) => console.log(json);)
  };
}
*/

    async componentDidMount(){
    const response = await fetch('https://type.fit/api/quotes');
    const jsondata = await response.json();

    let randomIndex = Math.floor(Math.random() * jsondata.length)
    
    let quoteAndAuthorArray = Object.values(jsondata[randomIndex]);

    this.setState({ quote: quoteAndAuthorArray[0] , author: quoteAndAuthorArray[1] });
}

    

handleClick(){
  this.setState({
    quote: "new quote",
    author: "new author"
  });
};


render () {
  
  return (
      
    <div>
      <wrapper className="centered" id="quote-box"> {/* wrapper is only used because FCC project asks for it */}

          <div className="row">
          <div className="col">
              
      <div id="text">"{this.state.quote}"</div>
      </div>
      </div>
      <div className="row">
      <div className="col">
      <div id="author">~{this.state.author}</div>
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
};

export default App;


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Test
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}
*/

