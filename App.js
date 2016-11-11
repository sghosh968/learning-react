import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      students: [
        {id: 1, name: "Ajay", branch: "CSE", active: true},
        {id: 2, name: "Susil", branch: "CE", active: true},
        {id: 3, name: "Suraj", branch: "ME", active: true},
        {id: 4, name: "Anmol", branch: "CSE", active: false},
        {id: 5, name: "Dinesh", branch: "EE", active: true}
      ]
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

  render() {
    let rows = this.state.students.map(student => {
      return(
        <StudentRow key={student.id} studentData={student} />
      );
    })
    return(
      <table>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

class StudentRow extends React.Component {
  render() {
    if (this.props.studentData.active){
      return(
        <tr>
          <td>{this.props.studentData.id}</td>
          <td>{this.props.studentData.name}</td>
        </tr>
      );
    }
    else{
      return false;
    }
  }
}


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
// 8. Creating components dynamically from a collection
