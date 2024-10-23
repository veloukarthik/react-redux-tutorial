import React, { Component } from 'react'
class MyClass extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount(): void {
        console.log("component did mount");
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("component did update");
    }

    componentWillUnmount(): void {
        console.log("component will unmount");
    }
    
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        return true;
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

export default MyClass;