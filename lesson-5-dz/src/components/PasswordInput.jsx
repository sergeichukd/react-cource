import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


export default function PasswordInput(props) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((showPassword) => {
      return !showPassword
    })
  };

  return (
    <FormControl
      variant="outlined"
      size='small'
      fullWidth={true}
      margin='dense'
      error={props.differentPasswords}
    >
      <InputLabel htmlFor="password-input-field">{props.repeatPassword ? 'Repeat password' : 'Password'}</InputLabel>
      <OutlinedInput
        id="password-input-field"
        type={showPassword ? 'text' : 'password'}
        value={props.value}
        onChange={props.onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={props.repeatPassword ? 125 : 70}
      />
      {props.errorHelper}
    </FormControl>
  )
}
