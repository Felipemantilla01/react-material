import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class ButtonFelipe extends Component {
    render() {
        
        return (
        <Button variant="contained" color={this.props.color}>{this.props.name}</Button>
        )
    }
}
