import './style.css';

import React, { Component } from 'react';

export default class Comp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: true
        }
    }

    handleClick = () => {
        // console.log(this.state.test)
        this.setState({
            test: !this.state.test
        })
    }

    render() {
        let { test } = this.state;

        return (
            <div className="test">
                <button onClick={ this.handleClick }>Toggle</button>

                <br/>

                {
                    test && 
                    <div>
                        <h1>Test = true</h1>
                    </div>
                }

                {
                    !test && 
                    <div>
                        <h1>Test = false</h1>
                    </div>
                }
            </div>
        )
    }
}
// export default props => {
//     // let name = props.name;
//     let { name } = props;

//     return (
//         <div className="d-flex flex-column justify-content-center align-items-center">
//             <h2>Something from react-component</h2>
//             <p className="red">Hello { name }</p>
//         </div>
//     )
// }