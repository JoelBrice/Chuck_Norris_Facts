import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fact:
        "Chuck Norris can text using his walkie talkie and without batteries.",
      category: "humor"
    };

    this.getFact = this.getFact.bind(this);
    this.getFactsByCaterogy = this.getFactsByCaterogy.bind(this);
  }
  // Get random Shuck Norris facts.
  getFact() {
    axios
      .get(`https://api.chucknorris.io/jokes/random`)
      .then(response => {
        this.setState({ fact: response.data.value });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Get random facts by category

  getFactsByCaterogy() {
    axios
      .get(`https://api.chucknorris.io/jokes/random?category={category}`)
      .then(response => {
        this.setState({ category: response.data.category });
      })
      .catch(error => {
        console.log(error);
      });
  }
  getCategories() {
    axios
      .get(`https://api.chucknorris.io/jokes/categories`)
      .then(response => {
        this.setState({ category: response.data.category });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container">
        <h1 id="title">CHUCK NORRIS FACTS</h1>
        <h3 id="fact">{'" ' + this.state.fact + '"'}</h3>
        <h2>{this.state.category}</h2>
        <button
          type="button"
          className="btn btn-success"
          onClick={this.getFact}
        >
          MORE FACTS
        </button>
        <button
          type="button"
          className=" btn btn-success"
          onClick={this.getCategories}
        >
          Categories
        </button>
        <aside>
          <h1 id="category-title"> Get facts by Category</h1>
          <select onSelect={this.getFactsByCaterogy()}>
            <option>Select a category</option>
            <option>a category</option>
            <option>a category</option>
            <option>a category</option>
            <option>a category</option>
            <option>a category</option>
            <option>a category</option>
            <option>a category</option>
          </select>
        </aside>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
