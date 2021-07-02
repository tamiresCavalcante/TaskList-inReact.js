import { render } from 'react';
import React, { Component } from 'react';

export default class Main extents Components {
    constructor(props) {
        super(props);

        this.state = {
            newTask: '',

        };

        this.ChangeInput = this.ChangeInput.bind(this);
    }

    ChangeInput(e) {
        this.setState({
            newTask: e.target.value,
        });
    }

    render() {
        return (
            <div className="main">
                <h1>Task List</h1>
                <form action="#">
                    <input onChange={this.ChangeInput} type="text" />
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}
