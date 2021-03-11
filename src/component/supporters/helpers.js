import React from 'react';
import { Dimensions, View, TouchableOpacity, Text } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Item = ({ line }) => (
    <View style={{height:windowHeight*0.13, width:windowWidth}}>
        <TouchableOpacity style={{
            padding: 30,
            // top:-10,
            top:80,
            backgroundColor: "#ffcc00",
            color: "#ffffff"
        }}>
            <Text>{line}</Text>
        </TouchableOpacity>

    </View>
);

export const renderItem = ({ item }) => (

    <Item line={item.line}/>
);