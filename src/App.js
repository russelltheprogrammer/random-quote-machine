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
  this.fetchData = this.fetchData.bind(this);
}
  
async componentDidMount() {
  this.fetchData();
}

fetchData() {
  fetch('https://type.fit/api/quotes')
  .then(response => response.json())
  .then(data => {let randomIndex = Math.floor(Math.random() * data.length);
    this.setState({ text: data[randomIndex]["text"], author: data[randomIndex]["author"], loading: false })
})
  .catch(error => console.error(error));
  
}

  render() {
if (this.state.loading) {
  return <div>loading...</div>;
}

if (!this.state.text & !this.state.author) {
  return <div>No Quote!</div>;
}

    return (
<div>
    <div className="wrapper" id="quote-box"> {/* wrapper is only used because FCC project asks for it */}
        <div id="quote-and-author">
          <div className="row">
          <div className="col"> 
      <div id="text"><i className="fas fa-quote-left"></i> {this.state.text} <i className="fas fa-quote-right"></i></div>
      </div>
        </div>
          <div className="row">
          <div className="col">
            <div id="author">~{this.state.author === null ? "Unknown" : this.state.author }</div>
          </div>
          </div>
      </div>
      <div id="containertwo">
          <div className="row">
          <div className="col">
          <button onClick = {this.fetchData} id="new-quote">Click For New Quote</button>
          </div>
          <div className="col" id="tweet-quote-box">
          <a id="tweet-quote" href={"https://twitter.com/intent/tweet" + 
          encodeURIComponent(
            this.state.text + this.state.author
          )
        } 
          target="_blank"><i class="fab fa-twitter" style={{fontSize: 36}}></i></a>
          </div>
          </div>
      </div>
      
   </div>
</div>
    );
  }
}


export default App;



