import React, { Component } from 'react';


export default class SearchBar extends Component {
    // onInputChange (event) {
    //     console.log(event.target.value);
    // }

    state = { term : ''};

    //eita sudhumatro form ta refresh korbe submit korar pro , pura page reload korbe na
    onFormSubmitHandler (event)  {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className = "ui segment">
                <form onSubmit = {event => this.onFormSubmitHandler(event)} className = "ui form" >
                    <div className = "field">
                        <label className = "text-center">Search Image</label>
                        <input type = "text" value = {this.state.term } onChange = {(e) => this.setState({term : e.target.value})} />
                    </div>
                </form>
            </div>
        )
    }
}
