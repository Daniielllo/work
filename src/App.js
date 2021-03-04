import React, { Component } from "react";
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from "react-native";
import HeadScroll from "./component/HeadScroll";
import ScrollDown from "./component/ScrollDown";



class App extends React.Component {
    state = {
        activeCategoryid: 0
    }
    
Change = (activeCategoryid) => {
    this.setState({activeCategoryid})
}

    render() {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <HeadScroll Change={this.Change} activeCategoryid={this.state.activeCategoryid}/>
                <ScrollDown activeCategory={this.state.activeCategoryid}/>
            </View>
            
        )
    }
}

export default App;