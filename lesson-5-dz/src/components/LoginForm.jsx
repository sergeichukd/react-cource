import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

import PasswordInput from './PasswordInput.jsx'


export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: ''
    };

    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChangeLogin(event) {
    this.setState({
      login: event.target.value
    });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    alert(`Отправленное имя: '${this.state.login}' и пароль: '${this.state.password}'`);
    event.preventDefault();
  }

  handleClose(event) {
    this.props.onClose();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          className="login-text-field"
          label="Login"
          variant="outlined"
          value={this.state.login}
          onChange={this.handleChangeLogin}
          size='small'
          margin='dense'
          fullWidth={true}
        />
        <PasswordInput
          onChange={this.handleChangePassword}
          value={this.state.password}
        />
        <div className="modal-window-login-butttons">
          <Button variant="outlined" color="primary" margin='normal' onClick={this.handleSubmit}>
            Login
          </Button>
          <Button variant="outlined" color="secondary" onClick={this.handleClose}>
            Cancel
          </Button>
        </div>
      </form>
    );
  }
}
