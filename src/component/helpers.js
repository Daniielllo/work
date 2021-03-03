import React from "react";
import { Image, Text, View } from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const Item = ({ url, title, id }) => (
    <View>
        <Image
            style={
                {
                    width: windowWidth,
                    height: 300,
                }
            }
            source={{ uri: url }} />
        <Text style={{
            padding: 10,
            bottom: 40,
            backgroundColor: "#a00555",
            opacity: 0.8,
            color: "#ffffff"
        }}>{title}</Text>

    </View>
);

export const renderItem = ({ item }) => (
    <Item url={item.url} title={item.title} />
);

export const OnClick = ({ check }) =>(
    <View>
        <Text>{check}</Text>
    </View>
);
