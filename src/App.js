import React, { Component } from "react";
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from "react-native";
import HeadScroll from "./component/HeadScroll";
import ScrollDown from "./component/ScrollDown";



class App extends React.Component {
    
    render() {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <HeadScroll/>
                <ScrollDown/>
            </View>
            
        )
    }
}

export default App;