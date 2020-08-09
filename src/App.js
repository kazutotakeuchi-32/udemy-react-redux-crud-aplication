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
//     return(
//       React.createElement(
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

// class App extends Component{
//   render(){
//     return(
//       <React.Fragment>
//         <h1 className="App">Hello , world!</h1>
//           <label htmlFor="bar">bar</label>
//           <input type ="text" onKeyUp={()=>{ document.querySelector("body").insertAdjacentHTML("beforeend",document.querySelector("input").value)

//         }} />
//       </React.Fragment>
//     // <div>
//     //   <h1 className="App">Hello , world!</h1>
//     //   dom
//     //   <h2>my name is {name("kazuto")}</h2>
//     // </div>

//     )
//   }
// }
const App = ()=>(<Counter/>)

class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {count:0,name:"laz"}
  }

  handlePlusButton = ()=> {
    if (this.state.count<20) {
      this.setState({count: this.state.count+1})
    }else{
      alert("20になりました")
      this.state.count = 0
      this.setState({count:this.state.count})
    }
  }

  handleMiusButton = ()=> {
    if (this.state.count<=0) {
      return
    }else{
      this.setState({count:this.state.count-1})
    }
  }

  render(){
  return (
    <React.Fragment>
    <div>count:{this.state.count}</div>
    <button onClick={this.handlePlusButton}>+1</button>
    <button onClick={ this.handleMiusButton}>-1</button>
    </React.Fragment>
    )
  }
}
// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author}/>
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }



// function App(){
//   const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//       name: 'Hello Kitty',
//       avatarUrl: 'https://placekitten.com/g/64/64',
//     },
//   };
//  return( <Comment
//       date={comment.date}
//       text={comment.text}
//       author={comment.author}
//     />)
// }

// function Avatar(props){
//   return(
//     <img className ="Avatar"
//       src={props.user.avatarUrl}
//       alt ={props.user.name}
//     />
//   )
// }

// function UserInfo(props){
//   return(
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   )
// }

// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//   />,
  // document.getElementById('root')
// );

export default  App;
