import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Field,reduxForm} from 'redux-form'
import { getEvent,deleteEvent,putEvent} from '../actions'
import {Link} from 'react-router-dom'




class EventShow extends Component{

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  renderField(field){
    const {input,label,type,meta:{touched,error}} = field

    return (
    <div>
      <input {...input} placeholder ={label} type ={type}  />
        {touched && error && <span>{error}</span>}

    </div>)
  }

  async onDeleteClick (){
    const {id}  = this.props.match.params
    console.log(id);
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  async onSubmit(values){
    await this.props.postEvent(values)
    this.props.history.push('/')
  }



  render(){
    const {handleSubmit,pristine,submitting} = this.props
    return (
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="">
           < Field label ="Title" name = "title" type="text" component ={this.renderField} />
          </div>
          <div className="">
           < Field label ="Body" name = "body" type = "text" component ={this.renderField} />
          </div>
          <div className="">
            <input type="submit" value="Submit" disabled ={pristine || submitting}/>
            <Link to = "/">Cancel</Link>
            <Link to = "/" onClick ={this.onDeleteClick}>Delete</Link>
          </div>
        </form>
      )
  }

}

const mapDisspatchToProps = ({ deleteEvent})
const validate = values =>{
  const errors = {}
  if (!values.title) {errors.title = "Enter a title please"}
  if (!values.body) {errors.body = "Enter a body please"}
  return errors;
}
  export default connect(null,mapDisspatchToProps)(
  reduxForm({validate,form:'eventShowForm'})(EventShow)
  )
