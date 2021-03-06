import React, { Component } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const temp = [""]

class HeadScroll extends React.Component{


    state  = {
        category:[
            {
                keyword:"Тьма",
                color:"black",
                paddingColor:"white",
                id:1
            },
            {
                keyword:"Свет",
                color:"#FFFF00",
                paddingColor:"black",
                id:2
            },
            {
                keyword:"Земля",
                color:"#800000",
                paddingColor:"white",
                id:3
            },
            {
                keyword:"Огонь",
                color:"#FF0000",
                paddingColor:"white",
                id:4
            },
            {
                keyword:"Вода",
                color:"blue",
                paddingColor:"#",
                id:5  
            },   
            {
                keyword:"Воздух",
                color:"#00BFFF",
                paddingColor:"",
                id:6  
            }            
        ]
    }

    render(){
        const {category, color, id} = this.state
        const { Change, activeCategoryid } = this.props
        return(
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {
                    category.map((item) =>
                        <View key = {item.keyword} style={{height:90, paddingRight:10}}> 
                            <TouchableOpacity 
                                style={{
                                    padding:20, 
                                    borderColor: activeCategoryid !== item.id? "#a00555" :temp[0] = item.color,
                                    backgroundColor: activeCategoryid !== item.id? "#a00555" :temp[0]= item.color,
                                    borderRadius:40,
                                    borderWidth: 3}} onPress={()=>activeCategoryid === item.id? Change(0) :Change(item.id)}>
                                <Text style={{color: activeCategoryid !== item.id? "white" :temp[0] = item.paddingColor}}>{item.keyword}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </ScrollView>
        )
    }
}
export default HeadScroll;