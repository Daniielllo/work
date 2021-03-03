import React, { Component } from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import {Button, ButtonDone, ButtonPrev, ButtonNext} from "./component/Button";
import Counter from "./component/Counter";

const styles = StyleSheet.create({
    picture:{
        width:'50%',
        height:'100%',
    },
});

class App extends React.Component {
    state = {
        count: 0
    }

    increacse = () => {
        this.setState({count: this.state.count + 1})
    }
    decreacse = () => {
        this.setState({count: this.state.count - 1})
    }
    updatePeople = () => {
        this.setState({temp: true})
    }

    
    render() {
        console.log(this.state.count)
        
        let picture = ["https://shop.salonsecret.ru/media/wysiwyg/blog/post/podkova-morzh-karandash-samye-modnye-vidy-usov/glav.jpg",
         "https://tesakov.com/image/catalog/samooborona/boroda/usi-morzh.jpg",
          "https://balashiha.charuni.ru/wp-content/uploads/2017/03/mr.incredibeard-e1490173864485.jpg",
           "https://content.onliner.by/news/820x5616/48ac85682dd1d592548c19670127095f.jpeg",
            "https://content.onliner.by/news/820x5616/d4e03f4da3945acb47203b5b3a268eee.jpeg"];
            
        if (this.state.temp) {
            return (
                <Text>{this.state.Name}, {this.state.Age}</Text>
            )
        }
        return (
            <View
                style={{
                    flex: 1,
                    alignSelf:"center",
                    justifyContent:"space-around"
                }}
            >
                {/* {this.state.count <= 20 && (<Counter count={this.state.count}/>)} */}
                 {/* <Counter count={this.state.count} />
                {this.state.count <= 20 && (<Button increacse={this.increacse1}/>)}
                {this.state.count >= 20 && 
                <> 
                    <Button increacse={this.increacse2}/>
                </>
                } */}
                {/*
                <Text>Name</Text>
                
                <TextInput value={this.state.Name} onChangeText={Name => this.setState({Name})}/>
                <Text>Age</Text>
                <TextInput value={this.state.Age} onChangeText={Age => this.setState({Age})}/>
                <ButtonDone updatePeople={this.updatePeople}/>
                */}
                <Image
                    style={
                        {
                            width:300,
                            height:300,
                        }
                }
                    source={{uri: picture[this.state.count]}}
                /> 
                {this.state.count > 0 && <ButtonPrev 
                    decreacse={this.decreacse}
                />
                }
                {this.state.count < 4 && <ButtonNext 
                    style={{
                        alignContent:"center"
                    }}
                    increacse={this.increacse}
                
                />
                }
            </View>
        )
    }
}

export default App;