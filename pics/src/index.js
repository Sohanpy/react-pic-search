import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from '../src/components/App';

export default class Index extends Component {
    render() {
        return (
            <div>
                <App/>
            </div>
        )
    }
}

ReactDOM.render(<Index/> , document.querySelector('#root'));