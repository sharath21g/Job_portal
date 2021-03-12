import React, { Component } from 'react'
import history from './../../history'

export class SignIn extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       password: ''
    }
  }
  userNameHandler = (e) => {
    this.setState({username: e.target.value})
  }
  
  passwordHandler = (e) => {
    this.setState({password: e.target.value})
  }
  SubmitHandler = (e) => {
    history.push('/AdminPage')
    e.preventDefault()
  }

  render() {
    const {username,password} = this.setState
    return (
      <div>
        <form onSubmit={this.SubmitHandler}>
          <input type='text' placeholder='UserName' value={username} onChange={this.userNameHandler} required/>
          <input type='password' placeholder='password' value={password} onChange={this.passwordHandler} required/>
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

export default SignIn


