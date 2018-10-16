import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import  {updateuser,adduser} from './action/user-action';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userstate :""
    }
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }
  onUpdateUser = (event)=>{
    event.preventDefault();
    this.setState({userstate:event.target.value});
    // this.props.onUpdateUser(event.target.value);
  }
  onAddUser = ()=>{
    this.props.onAddUser([this.state.userstate]);
    this.setState({userstate:""});
  }
  render() {
    console.log("yup");
    console.log(this.props);
    return (
      <div className="App">

        <h3>TODO</h3>

        { this.props.user.map((value,index)=>{
          return <h1 key={index}>{value}</h1>
        })}
        <div>
          <input onChange = {this.onUpdateUser} value = {this.state.userstate}/>
        </div>
        <button onClick = {this.onAddUser} >addUser</button>
      </div>
    );
  }
}
const mapStateToProps = state=>(
    {
      user : state.user
    }
  );
const mapActionToProps = {
  onUpdateUser : updateuser,
  onAddUser : adduser
}
export default connect(mapStateToProps,mapActionToProps) (App);
