import React from 'react';
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
const App = ()=>{
  const profiles =[
    {name:"Taro",age:20},
    {name: "kazuto",age:20},
    {name: "kazuto"}

  ]
  return (
  <div>
    {
      profiles.map((profile, index)=>{
        return <User name ={profile.name} age={profile.age} key={index}/>
      })
    }
  </div>
  )
}
const User=(props)=>{
return(
<div>
  <h1> hi , I am {props.name}!</h1>
  <h1>{props.age}</h1>
</div>
  )
}
User.defaultProps ={
  age: 1
}

export default App;
