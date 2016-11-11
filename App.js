import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.update = this.update.bind(this);
    this.state = {
      increasing: false
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("Next props are :-");
    console.log(nextProps);
    this.setState({increasing: nextProps.val > this.props.val});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 2 === 0;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component updated ..");
  }

  componentWillMount() {
    console.log("Mounting ..");
  }

  componentDidMount() {
    console.log("Mounted ..");
  }

  update() {
    ReactDOM.render(<App val={this.props.val + 1} />, document.getElementById('app'))
  }
  render() {
    console.log("Rendering ..");
    console.log("Props: increasing = " + this.state.increasing);
    return(
      <button onClick={this.update}>
      {this.props.val}
      </button>
    )
  }
}

App.defaultProps = {val: 0}

export default App;

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
// 7. Learned about few more component lifecycle methods :-
// -> componentWillReceiveProps(newProps) > is called before a component receives new Props
// -> componentShouldUpdate(nextProps, nextState) > is called before a component in DOM is updated and output of this method decides if a component shuold be re-rendered or not.
// -> componentDidUpdate(prevProps, prevState) > is called if component has been updated.
