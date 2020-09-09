import './style.css';
import React, { Component } from 'react';

export default class Comp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            test: true
        }
    }

    handleClick = () => {
        console.log(this.state.test);
        this.setState({
            test: !this.state.test
        })
    }

    render() {
        let { test } = this.state;

        return( 
            <div className="test">
                <button onClick={ this.handleClick }>toggle</button>
                <br/>

                    {test && <div>
                        <h2>Test = true</h2>
                    </div>}
                

                    {!test && <div>
                        <h2>test = false</h2>
                    </div>}

            </div>
        )
    }
}

// export default props => {
//     let { name } = props;
//     let { i } = props;

//     return (
//         <div className="d-flex flex-column justify-content-center align-items-center">
//             <h1 className="title">Hello react!</h1>
//             <p>hi { name[i] }</p>
//         </div>
//     )
// }