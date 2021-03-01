import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import {Button, ButtonDone} from "./component/Button";
import Counter from "./component/Counter";

class App extends React.Component {
    state = {
        Name: "Start",
        Age: 1,
        temp: false
    }

    // increacse1 = () => {
    //     this.setState({count: this.state.count + 3})
    // }
    // increacse2 = () => {
    //     this.setState({count: this.state.count * 2})
    // }
    updatePeople = () => {
        this.setState({temp: true})
    }

    

    render() {
        console.log(this.state.count)
        if (this.state.temp) {
            return (
                <Text>{this.state.Name}, {this.state.Age}</Text>
            )
        }
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {/* {this.state.count <= 20 && (<Counter count={this.state.count}/>)} */}
                {/* <Counter count={this.state.count} />
                {this.state.count <= 20 && (<Button increacse={this.increacse1}/>)} 
                {this.state.count >= 20 && (<Button increacse={this.increacse2}/>)} */}
                <Text>Name</Text>
                <TextInput value={this.state.Name} onChangeText={Name => this.setState({Name})}/>
                <Text>Age</Text>
                <TextInput value={this.state.Age} onChangeText={Age => this.setState({Age})}/>
                <ButtonDone updatePeople={this.updatePeople}/>
            </View>
        )
    }
}

export default App;