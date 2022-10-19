import React, { Component } from 'react'
class Avatar extends Component {
    render() {
        return (
            // Các props chúng ta có thể pass cho tag img là các
            // props được pre-define (ReactDOM tuân theo chuẩn HTML standard)
            <img
                className="avatar"
                src="https://i.imgur.com/1bX5QH6.jpg"
                alt="Lin Lanying"
                width={300}
                height={300}
            />
        )
    }
}

export class Profile extends Component {
    render() {
        return <Avatar />
    }
}

export default Profile
