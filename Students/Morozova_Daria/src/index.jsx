import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

const container = document.getElementById('app');

ReactDom.render(
    <div>
        <h2>Something from react</h2>
    </div>,
    container
)
