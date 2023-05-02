import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  constructor() {
    super() 
    this.state = {
      fullName: '',
      username: '',
      email: '',
      password: ''
    }
    this.changeFullName = this.changeFullName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);

  }

  changeFullName(event) {
    this.setState({
      fullName: event.target.value
    })
  }

  changeUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

    changeEmail(event) {
      this.setState({
        email: event.target.value
      })
    }

    changePassword(event) {
      this.setState({
        password: event.target.value
      })
    }

  render() {
    return (
      <div className="container" style={{ marginTop: '120px'}}>
        <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input 
                type="text"
                placeholder='Full Name' 
                onChange={this.changeFullName} 
                value={this.state.fullName}
                className='form-control form-group'
              />
              <input 
                type="text"
                placeholder='Username'
                onChange={this.changeUsername}
                value={this.state.username} 
                className="form-control form-group"
              />
              
              <input
                placeholder="E-mail"
                onChange={this.changeEmail}
                value={this.state.email}
                className='form-control form-group'
              />
              
              <input 
                  type="password"
                  placeholder='Password'
                  onChange={this.changePassword}
                  value={this.state.password}
                  className='form-control form-group'
              />
              <input type="submit" className="btn btn-danger" />
            </form>
        </div>
      </div>
    )
  }
}