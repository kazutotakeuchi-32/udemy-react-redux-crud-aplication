import React, { Component } from 'react';
import {connect} from 'react-redux'
import {readEvents} from '../actions'
import _ from 'lodash'
import {Link} from 'react-router-dom'


function name(){
  return name
}

function clickCall(){
  alert(dom)
}
 const greeting = "Hi Tom!"
 const dom = `<h1 className="ff">${greeting}</h1>`

class EventIndex extends Component{

  componentDidMount(){
    this.props.readEvents()
  }

  readEvents(){
    return _.map(this.props.events,event=>(
      <tr key ={event.id}>
        <td>{event.id}</td>
        <Link to ={`events/${event.id}`}>
          {event.title}
        </Link>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render(){
    const props = this.props
    return (
      <React.Fragment>
      <table>
        <thead>
          <tr>
            <th> ID </th>
            <th> Title </th>
            <th> Body </th>
          </tr>
        </thead>
        <tbody>
          {this.readEvents()}
        </tbody>
      </table>
      <Link to ="events/new">New Event</Link>
      {/* <Link to ="/"></Link> */}
      </React.Fragment>
      )
  }

}

const mapStateToProps = state=>({events: state.events})
const mapDisspatchToProps = ({ readEvents})
export default connect(mapStateToProps,mapDisspatchToProps)(EventIndex)


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
