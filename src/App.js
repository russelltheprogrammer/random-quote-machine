import './App.css';
import React from 'react';

class App extends React.Component {
constructor(props){
  super(props);
    this.state = {
      loading: true,
      text: "",
      author: "",
  }
  this.handleClick = this.handleClick.bind(this);
  this.fetchData = this.fetchData.bind(this);
}
  
async componentDidMount() {
  this.fetchData();
}

fetchData() {
  fetch('https://type.fit/api/quotes')
  .then(response => response.json())
  .then(data => this.setState({ text: data[0]["text"], author: data[1]["author"], loading: false}))
  .catch(error => console.error(error));
  
}


/*
  fetchData() {
    const url = 'https://type.fit/api/quotes';
    const response = await fetch(url);
    const jsonData = await response.json();
    let randomIndex = Math.floor(Math.random() * jsonData.length);

    this.setState({text: Object.values(jsonData[randomIndex]["text"]), author: Object.values(jsonData[randomIndex]["author"]), loading: false })
    console.log(jsonData[randomIndex]);
  }
*/
  handleClick() {
    this.setState({
      text: "",
      author: ""
    });
  };


  render() {
if (this.state.loading) {
  return <div>loading...</div>;
}

if (!this.state.text & !this.state.author) {
  return <div>No Quote!</div>;
}


    return (
<div>
      <wrapper className="centered" id="quote-box"> {/* wrapper is only used because FCC project asks for it */}

          <div className="row">
          <div className="col">
              
      <div id="text">"{this.state.text}"</div>
      </div>
      </div>
      <div className="row">
      <div className="col">
      <div id="author">~{this.state.author === null ? "Unknown" : this.state.author }</div>
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



