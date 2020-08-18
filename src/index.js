import React from 'react';
import ReactDOM from 'react-dom';
import {createStore , applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import './index.css';
import redeucer from './reducers'
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new'
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history'
const newHistory = createBrowserHistory();


const store = createStore(redeucer , applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route   exact path = "/events/new" component ={EventsNew}/>
          <Route   exact path = "/" component ={EventsIndex}/>
        </Switch>
      </BrowserRouter>
    </Provider>
    ,
  document.getElementById('root')
);
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// function Cpp(){
//   return(
//     <div>
//     <Welcome name ="Sara"/>
//     <Welcome name ="Game"/>
//     <Welcome name ="Sara"/>
//     </div>

//   )
// }

// // const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   <Cpp/>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
