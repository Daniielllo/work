import React from 'react';
import { View, TouchableOpacity, Text, } from "react-native";




class CheckButton extends React.Component {
    state = {
        data: [
            {
                url: "https://rostec.ru/upload/iblock/836/8361948222bf21379605716cfa63cbb9.jpg",
                title: "Вода",
                id: 5
            },
        ]
    }

    render() {
        const { Send } = this.props
        return (
            <View style={{height: 50, width:70, backgroundColor:"#cccc66", borderRadius:40}} >
                <TouchableOpacity
                style={{alignItems:"center", flex:1, justifyContent:"center"}}
                onPress={Send}>
                    <Text>Confirm</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

export default CheckButton;