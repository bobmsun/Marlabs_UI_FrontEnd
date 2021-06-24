import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }
        this.clickHandler3 = this.clickHandler3.bind(this);
    }

    clickHandler1() {
        console.log(this)          // will print undefined
        this.setState({
            message : "Bye"
        })
    }

    clickHandler2() {
        this.setState({
            message : "Bye"
        })
    }

    clickHandler3() {
        this.setState({
            message : "Bye"
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.clickHandler1}>CLICK (Event Bind)</button>    {/* 这个不 work */}
                <hr />
                <button onClick={this.clickHandler2.bind(this)}>CLICK (Event Bind)</button>      {/* every time it rerenders, it creates a new bind */}
                <hr />
                <button onClick={() => this.clickHandler2()}>CLICK (Event Bind)</button>       {/* arrow function is used in a hurry */}
                <hr />
                <button onClick={this.clickHandler3}>CLICK (Event Bind)</button>    {/* this is the recommended way */}
            </div>
        )
    }
}

export default EventBind
