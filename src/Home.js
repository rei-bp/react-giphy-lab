import React, { Component } from 'react'
import SearchContainer from './SearchContainer'







export default class Home extends Component {

    state = {
        gifSearch: '',
        gifList: this.props.gifArray
    }



    render() {
        return (
            <SearchContainer 
            gifFind={this.state.gifSearch}
            gifHomeList={this.state.gifList}
            />
        )
    }
}
