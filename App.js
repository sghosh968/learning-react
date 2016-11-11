import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      val: 0
    }
    this.update = this.update.bind(this)
  }

  update(e){
    this.setState({
      val: this.state.val + 1
    })
  }

  componentWillMount() {
    // Called when component is ready to be mounted into the DOM
    console.log("Mounting ...");
  }

  render(){
    console.log("Rendering ..");
    return (
      <div>
        <button onClick={this.update}>{this.state.val}</button>
      </div>
    )
  }

  componentDidMount() {
    // Called when component is already mounted into the DOM
    console.log("Mounted ..");
  }

  componentWillUnmount() {
    // Called when component is unmounted from the DOM
    console.log("component unmounted ..");
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

class Wrapper extends React.Component {
  constructor(){
    super();
  }
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return(
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper

// Things learned till now :-
// 1. Use of state
// 2. Use of setState and how to set state within a constructor
// 3. super() must be called within the constructor
// 4. Use of ref to reffer to an element within the DOM for a Component
// 5. How ReactDOM.findDOMNode() is used to find DOMNode.
// 6. Learned usage of component lifecycle callback methods that are automatically invoked when a component transitions from one lifecycle state to other,
//    methods :
//      componentWillMount() -> Called when component ready to be mounted
//      componentDidMount() -> Called after component has been mounted
//      componentDidMount() -> called when component is unmounted from the dom.
// Other method i.e. used to umnount a component from DOM
// ReactDOM.unmountComponentAtNode()
