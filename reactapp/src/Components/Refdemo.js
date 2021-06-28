import React, { Component } from 'react'

export class Refdemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    // lifecycle hook, executes when the component is rendered
    componentDidMount() {
        this.inputRef.current.focus();
        console.log(this.inputRef)
    }

    // arrow fn because no binding
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.clickHandler}>CLICK</button>
            </div>
        )
    }
}

export default Refdemo
