import React, { Component } from 'react'

class Football extends Component {
    shoot = (a) => {
        alert(a)
    }

    render() {
        return <button onClick={() => this.shoot('Goal!')}>Take a shot!</button>
    }
}

class MyForm extends Component {
    handleSubmit(e) {
        e.preventDefault()
        alert('Submitted')
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div>My Form</div>
                <button type="submit">Submit form</button>
            </form>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Football />
                <hr />
                <MyForm />
            </div>
        )
    }
}
