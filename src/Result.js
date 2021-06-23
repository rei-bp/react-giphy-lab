import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        const endResults = this.props.LookThroughGifs.map ((results) => {
            return results.data.url
        })
        return (
            <div>
                {endResults}
            </div>
        )
    }
}
