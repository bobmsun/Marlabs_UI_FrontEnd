import React, { Component } from 'react'

export default class GreetClass extends Component {
    render() {
        return (
            <div>
                <h1>Greet {this.props.name} aka {this.props.heroName}</h1>
            </div>
        )
    }
}

