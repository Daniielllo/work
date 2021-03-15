import React from 'react';
import { View, TouchableOpacity, Text, } from "react-native";




class CheckButton extends React.Component {

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