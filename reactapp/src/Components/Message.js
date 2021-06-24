import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Welcome To the State"
        }
    }

    changeMessage() {
        this.setState({
            message: "New Message from State"
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={ ()=>this.changeMessage() }>CLICk</button>
            </div>
        )
    }
}

export  default Message