import React, { PureComponent } from 'react'


class PureClass extends PureComponent {

    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                <h1>Hello, {(this.props as { name: string }).name}!</h1>
                <p>Count: {(this.state as { count: number }).count}</p>
                <button onClick={() => this.setState({ count: (this.state as { count: number }).count + 1 })}>Increment</button>
            </div>
        )
    }
}

export default PureClass;