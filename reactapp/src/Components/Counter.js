import React, { Component } from 'react'

// 这个 component 主要是来证明：
// 1. setState 是 Async 的  
// 2. React 的 batch processing model

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    // increment() {
    //     this.setState({
    //         count : this.state.count + 1
    //     })
    //     console.log(this.state.count)             // this will be executed first (before setState); it proves that setState is Asynch
    // }

    increment() {
        this.setState({
            count : this.state.count + 1
        }, ()=>console.log('Callback', this.state.count))        // make sure console.log is executed after setState
    }

    // this will still increase by i, because of batch model of execution; 这是 React 的 optimized execution method
    // 这个不 work（不 +5）的原因是：React executes these same statements in batch: execute them in parallel; 这是 React 的一种优化
    // if 我们想解决 这里React 的 execution in batch 的优化带来的问题，we need to use previous state
    // incrementFive() {
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    // }
    
    
    // 解决办法：use previous state
    increment2() {
        this.setState(prevState => ({
            count : prevState.count + 1
        }), ()=>console.log('Callback', this.state.count))        // make sure console.log is executed after setState
    }
    
    incrementFive() {
        this.increment2();
        this.increment2();
        this.increment2();
        this.increment2();
        this.increment2();
    }


    render() {
        return (
            <div>
                Count - {this.state.count}
                <hr />
                <button onClick={ ()=>this.increment() }>Increment</button>
                <hr />
                <button onClick={ ()=>this.incrementFive() }>IncrementFive</button>
            </div>
        )
    }
}

export default Counter
