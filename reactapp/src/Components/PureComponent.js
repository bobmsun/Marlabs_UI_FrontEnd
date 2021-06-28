import React, { PureComponent } from 'react'

export class PureComponent extends PureComponent {
    consturctor(props) {
        super(props)

        this.state = {
            name:"John"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "John"
            })
        }, 2000)
    }

    render() {
        return (
            <div>
                <h2>Parent Component</h2>
                <RegComp name={this.state.name} />
            </div>
        )
    }
}

export default PureComponent
