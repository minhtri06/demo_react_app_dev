import React, { Component } from 'react'
import Todos from './Todos'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            todos: ['todo 1', 'todo 2'],
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        return (
            <>
                <Todos todos={this.state.todos} />
                <hr />
                <div>
                    Count: {this.state.count}
                    <button onClick={() => this.increment()}>+</button>
                </div>
            </>
        )
    }
}

export default App
