import React, { Component } from 'react'

class MyForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        alert(this.state.name)
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    Enter your name:
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(e) =>
                            this.setState({ name: e.target.value })
                        }
                    />
                    <input type="submit" />
                </label>
            </form>
        )
    }
}

export default MyForm
