import React, { Component } from 'react'
import Search from './Search'
import Result from './Result'



export default class SearchContainer extends Component {

    searchGiphy = (e, input) => {
        e.preventDefault()
        const queryGif = e.target.value
        
        const filterGif = this.state.gifList.filter ((gif) => {
            return gif.data.source.includes(queryGif)
        })
        
        this.setState({
            gifSearch: queryGif,
            gifList: filterGif
        })
    }
    render() {
        console.log(this.props.gifFind)

        return (
            <div>
                <Search
                    gifValue={this.props.gifFind}
                    onChange={this.searchGiphy}
                />
                <Result
                    lookThroughGifs={this.props.gifHomeList}
                />
            </div>
        )
    }
}
