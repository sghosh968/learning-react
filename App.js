import React from 'react';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      txt: "Hi"
    }
  }

  update(e){
    this.setState({
      txt: e.target.value
    })
  }

  render(){
    return (
      <div>
        <input type="text"
        onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}
// App.propTypes = {
//   txt: React.PropTypes.string.isRequired,
//   cat: React.PropTypes.number.isRequired
// }
// App.defaultProps = {
//   txt: "This the default value for text property"
// }

export default App

// Things learned till now :-
// 1. Use of state
// 2. Use of setState and how to set state within a constructor
// 3. super() must be called within the constructor
