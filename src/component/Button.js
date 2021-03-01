import React from 'react';
import { TouchableOpacity, Text } from "react-native"

class Button extends React.Component{
    render(){

        return(
            <TouchableOpacity onPress={this.props.increacse}>
                   <Text>Press me</Text>   
            </TouchableOpacity>
        )
    }
}

export class ButtonDone extends React.Component{
    
    render(){
        return(
            <TouchableOpacity onPress={this.props.updatePeople}>
                <Text>Done</Text>
            </TouchableOpacity>
        )
    }

}

export class ButtonNext extends React.Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.increacse}>
                <Text>Next</Text>
            </TouchableOpacity>
        )
    }
}


export class ButtonPrev extends React.Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.decreacse}>
                <Text>Prev</Text>
            </TouchableOpacity>
        )
    }
}

export default Button;