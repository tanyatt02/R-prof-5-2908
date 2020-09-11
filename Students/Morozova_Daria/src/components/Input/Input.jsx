
        import './style.css';
        import React from 'react';

        import {TextField} from '@material-ui/core';
        import FloatingActionButton from '../FloatingButton/FloatingButton.jsx';

        export default class Input extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    text: ''
                }
            }

            handleChange = event => {
                if (event.keyCode !== 13) {
                    this.setState({ text: event.target.value });
                } else {
                    this.sendMessage();
                }                
            }
        
            render() {
                // let { some } = this.state;
        
                return (
                    <div className="controls d-flex justify-content-end align-items-baseline" style={ {width: '100%', display: 'flex'} }>
                        <TextField
                            name="input"
                            fullWidth={ true }
                            placeholder="Type your message here"
                            style={ {fontSize: '22px', margin: '0 0 20px 0', width: '80%'} }
                            onChange={ this.handleChange }
                            onKeyUp={ this.handleChange }
                            value={ this.state.text }
                        />

                        <FloatingActionButton
                            send={ this.props.send(text) }
                        ></FloatingActionButton>
                    </div>
                )
            }
        }
    