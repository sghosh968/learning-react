import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this)
  }

  update(e){
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.rangeInput).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.rangeInput).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.rangeInput).value
    })
  }

  render(){
    return (
      <div>
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <br />
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <br />
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
        <br />
        <Button>I <Heart /> React</Button>
      </div>
    )
  }
}

class Slider extends React.Component{
  render(){
    return(
      <div>
        <input ref="rangeInput" type="range"
        min="0"
        max="255"
        onChange={this.props.update} />
      </div>
    )
  }
}

class Button extends React.Component {
  render() {
    return(
      <button>{this.props.children}</button>
    )
  }
}

const Heart = () => <span className="glyphicon glyphicon-heart">love</span>

export default App

// Things learned till now :-
// 1. Use of state
// 2. Use of setState and how to set state within a constructor
// 3. super() must be called within the constructor
// 4. Use of ref to reffer to an element within the DOM for a Component
// 5. How ReactDOM.findDOMNode() is used to find DOMNode.
