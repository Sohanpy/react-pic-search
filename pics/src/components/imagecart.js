import React, { Component } from 'react'

export default class imagecart extends Component {
    render() {
        return (
            <div>
                <img  alt = {this.props.image.descrition} src = {this.props.image.urls.regular} />
            </div>
        )
    }
}
