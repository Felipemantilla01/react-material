import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class ButtonFelipe extends Component {
    render() {
        return (
        <Button 
        color={this.props.color} 
        variant={this.props.variant}
        > 
        {this.props.label}
        </Button>
        
        )
    }
}
