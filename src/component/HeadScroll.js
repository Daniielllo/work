import React, { Component } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { OnClick } from "./helpers";


class HeadScroll extends React.Component{


    state  = {
        category:[
            {
                keyword:"Тьма",
                color:"black",
                id:1
            },
            {
                keyword:"Свет",
                color:"yelow",
                id:2
            },
            {
                keyword:"Земля",
                color:"brown",
                id:3
            },
            {
                keyword:"Огонь",
                color:"red",
                id:4
            },
            {
                keyword:"Вода",
                color:"blue",
                id:5  
            },   
            {
                keyword:"Воздух",
                color:"liteblue",
                id:6  
            }            
        ]
    }

    render(){
        const {category, color, id} = this.state
        return(
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {
                    category.map((item) =>
                        <View key = {item.keyword} style={{height:80}}> 
                            <TouchableOpacity style={{padding:20, borderColor: "red", borderRadius:40,borderWidth: 3}} onPress={OnClick(item.keyword)}>
                                <Text style={{color:"red"}}>{item.keyword}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </ScrollView>
        )
    }
}
export default HeadScroll;