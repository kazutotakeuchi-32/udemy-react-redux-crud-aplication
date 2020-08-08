import React from 'react';
import PropTypes from 'prop-types'
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
User.propTypes ={
  name: PropTypes.string,
  age: PropTypes.number.isRequired
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
