import React, { Component } from 'react'

class Todos extends Component {
    render() {
        console.log('render child')
        return (
            <>
                <h2>My Todos</h2>
                {this.props.todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })}
            </>
        )
    }
}

export default Todos
