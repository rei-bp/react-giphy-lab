import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
            <h1>Search Giphy</h1>
                <input type="text"
                    placeholder="catJam"
                    value={this.props.gifValue}
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}
