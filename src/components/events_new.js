import React, { Component } from 'react';
import {connect} from 'react-redux'
// import {postEvent} from '../actions'
import {Link} from 'react-router-dom'




class EventNew extends Component{

  render(){
    const props = this.props
    return (
      <React.Fragment>
        <div className="">dddddd</div>
      </React.Fragment>
      )
  }

}

// const mapDisspatchToProps = ({ postEvent})

export default connect(null,null)(EventNew)


// export default EventIndex




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


// function App() {
//   return (  <div className="App">Hello , world!</div>);
// }


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


// Button = (props)=>{
//   return (
//    <React.Fragment>
//      {
//         props.buttons.map((button,index )=> {
//         return <button key={index} onClick={button.call}>{button.vl}</button>
//        })
//      }
//    </React.Fragment>)
//  }

{/* <div>count:{this.state.count}</div>
    <this.Button buttons={
      [
        {vl:"+1",call:this.handlePlusButton},
        {vl:"-1",call:this.handleMiusButton},
      ]
       }key={this.state.buttons}/> */}

 {/* <button onClick={this.handlePlusButton}>+1</button>
    <button onClick={ this.handleMiusButton}>-1</button> */}
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
