import React, { Component } from 'react'

export default class UserCard extends Component {
    render() {
        return (
            <div>
            <h2>{this.props.myInfo.name}</h2>
            <p>{this.props.myInfo.age}</p>
            <p>{this.props.myInfo.height}</p>
            </div>
        )
    }
}
