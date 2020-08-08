import React, { Component } from 'react';
import { render } from 'react-dom';
// function App() {
//   return (  <div className="App">Hello , world!</div>);
// }

function name(){
  return name
}
// class App extends Component{
//   render(){
//     return( React.createElement(
//       "div",
//         null,
//         "Hello,World"
//       )
//     );
//   }
// }
function clickCall(){
  alert(dom)
}
 const greeting = "Hi Tom!"
 const dom = `<h1 className="ff">${greeting}</h1>`

class App extends Component{
  render(){
    return(
      <React.Fragment>
          <label htmlFor="bar">bar</label>
          <input type ="text" onKeyUp={()=>{ document.querySelector("body").insertAdjacentHTML("beforeend",document.querySelector("input").value)}} />
      </React.Fragment>
    // <div>
    //   <h1 className="App">Hello , world!</h1>
    //   dom
    //   <h2>my name is {name("kazuto")}</h2>
    // </div>

    )
  }
}
export default App;
