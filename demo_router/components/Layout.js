import { Component } from 'react'

import { Outlet, Link } from 'react-router-dom'

class Layout extends Component {
    render() {
        return (
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                <Outlet />
            </>
        )
    }
}

export default Layout
