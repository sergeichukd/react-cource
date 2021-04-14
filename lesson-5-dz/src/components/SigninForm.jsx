import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

import PasswordInput from './PasswordInput.jsx'
import FormHelperText from '@material-ui/core/FormHelperText';


export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      surename: '',
      email: '',
      password: '',
      passwordRepeat: '',
      differentPasswords: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(fieldName) {
    return (function (event) {
      this.setState({
        [fieldName]: event.target.value,
        differentPasswords: false
      });
    }).bind(this)
  }

  handleSubmit(event) {
    if (this.state.password === this.state.passwordRepeat) {
      alert(`Отправленно:
      name: '${this.state.name}'
      surename: '${this.state.surename}'
      email: '${this.state.email}'
      password: '${this.state.password}'
      passwordRepeat: '${this.state.passwordRepeat}'
      differentPasswords: '${this.state.differentPasswords}'`);
    } else {
      this.setState({ differentPasswords: true });
    }
    event.preventDefault();
  }

  handleClose(event) {
    this.props.onClose();
  }

  render() {

    let errorHelper = null;
    if (this.state.differentPasswords) {
      errorHelper = <FormHelperText>Passwords are different</FormHelperText>
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          className="login-text-field"
          label="Name"
          variant="outlined"
          value={this.state.name}
          onChange={this.handleChangeInput('name')}
          size='small'
          margin='dense'
          fullWidth={true}
        />
        <TextField
          className="login-text-field"
          label="Surename"
          variant="outlined"
          value={this.state.surename}
          onChange={this.handleChangeInput('surename')}
          size='small'
          margin='dense'
          fullWidth={true}
        />
        <TextField
          className="login-text-field"
          label="Email"
          variant="outlined"
          value={this.state.email}
          onChange={this.handleChangeInput('email')}
          size='small'
          margin='dense'
          fullWidth={true}
        />
        <PasswordInput
          value={this.state.password}
          onChange={this.handleChangeInput('password')}
          differentPasswords={this.state.differentPasswords}
        />
        <PasswordInput
          value={this.state.passwordRepeat}
          onChange={this.handleChangeInput('passwordRepeat')}
          differentPasswords={this.state.differentPasswords}
          errorHelper={errorHelper}
          repeatPassword={true}
        />
        <div className="modal-window-login-butttons">
          <Button variant="outlined" color="secondary" onClick={this.handleClose}>
            Cancel
          </Button>
          <Button variant="outlined" color="primary" margin='normal' onClick={this.handleSubmit}>
            Sign in
          </Button>
        </div>
      </form>
    );
  }
}
