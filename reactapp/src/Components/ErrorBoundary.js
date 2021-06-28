import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    
    // Lifecycle hook：这个 lifycycle 就是 static 的，我们是 override 这个 function
    static getDerivedStateFromError(error) {
        console.log("execute getDerivedStateFromError")
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log("execute componentDidCatch")
        console.log(error)
        console.log(info)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something Went Wrong</h1>
        }
        // children refers to the component that we are rendering
        console.log('this.children -> ', this.props.children)
        return this.props.children
    }
}

export default ErrorBoundary
