import React, { Component } from "react";
import { View, Text, TextInput, Image } from "react-native";
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

        let picture = ["https://shop.salonsecret.ru/media/wysiwyg/blog/post/podkova-morzh-karandash-samye-modnye-vidy-usov/glav.jpg", "https://tesakov.com/image/catalog/samooborona/boroda/usi-morzh.jpg", "https://balashiha.charuni.ru/wp-content/uploads/2017/03/mr.incredibeard-e1490173864485.jpg", "https://content.onliner.by/news/820x5616/48ac85682dd1d592548c19670127095f.jpeg", "https://content.onliner.by/news/820x5616/d4e03f4da3945acb47203b5b3a268eee.jpeg"];
            
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
                {this.state.count >= 20 && 
                <> 
                    <Button increacse={this.increacse2}/>
                </>
                }
                
                <Text>Name</Text>
                <TextInput value={this.state.Name} onChangeText={Name => this.setState({Name})}/>
                <Text>Age</Text>
                <TextInput value={this.state.Age} onChangeText={Age => this.setState({Age})}/>
                <ButtonDone updatePeople={this.updatePeople}/>*/}
                <Image/>
            </View>
        )
    }
}

export default App;