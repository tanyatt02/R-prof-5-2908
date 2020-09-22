import './style.css';

import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import SendIcon from '@material-ui/icons/Send';
import IconButton from "@material-ui/core/IconButton";

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

    sendMessage = () => {
        if (!!this.state.text) {
            this.props.send(this.state.text);
            this.setState({ text: '' });

        }
    }

    render() {
        let { text } = this.state;

        return (
            <div className="controls d-flex mt-3">
                <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Message"
                    type="text"
                    value = { text }
                    onChange = { this.handleChange }
                    onKeyUp = { this.handleChange }
                    autoFocus
                />
                    <IconButton
                        onClick = { this.sendMessage }
                        aria-label="send"
                        color="primary">
                        <SendIcon />
                    </IconButton>
                </form>
            </div>
        )
    }
}