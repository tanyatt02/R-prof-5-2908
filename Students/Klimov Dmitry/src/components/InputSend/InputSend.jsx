
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

/* const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
})); */

export default class InputComp extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
        text: ''
    }
}

handleChange = evt => {
    if (evt.keyCode !== 13) {
        this.setState({ text: evt.target.value });
    } else {
        this.props.send(this.state.text);
    }
}

sendM = () => {
    this.props.send(this.state.text);
}

render(){

    return (
          <div className="controls d-flex">
                                <TextField
                                    name="input"
                                    fullWidth={ true }
                                    placeholder="Type your message"
                                    style={ {marginTop: 'inherit'} }
                                    onChange={ this.handleChange }
                                    onKeyUp={ this.handleChange }
                                    value={ this.state.text }
                                />
                                <Button
                                  variant="contained"
                                  color="primary"
                                  endIcon={<SendIcon />}
                                  onClick= { this.sendM }
                                >
                                  Send
                                </Button>
                                
                            </div>
        
      )
} 
}
    