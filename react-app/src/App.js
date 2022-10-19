import React, { Component } from 'react'
import './App.css'
import styles from './style.module.css'

export default class App extends Component {
    render() {
        return (
            <>
                <div
                    style={{
                        backgroundColor: 'chocolate',
                        color: 'white',
                        width: '200px',
                    }}
                >
                    Inline styling
                </div>
                <div className="css-stylesheets">CSS stylesheets</div>
                <div className={styles.bigblue}>Module CSS</div>
            </>
        )
    }
}
