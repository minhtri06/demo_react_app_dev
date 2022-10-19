import React, { Component } from 'react'

class Car extends Component {
    render() {
        return (
            <div>
                {this.props.car.id} - {this.props.car.brand}
            </div>
        )
    }
}

export default class Garage extends Component {
    render() {
        const cars = [
            { id: 1, brand: 'Ford' },
            { id: 2, brand: 'BMW' },
            { id: 3, brand: 'Audi' },
        ]
        return (
            <ul>
                {cars.map((car) => {
                    return (
                        <li>
                            <Car car={car} />
                        </li>
                    )
                })}
            </ul>
        )
    }
}
