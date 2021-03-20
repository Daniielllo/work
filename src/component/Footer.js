import React from 'react';
import { TextInput, View, Dimensions, ScrollView, Text } from "react-native";
import CheckButton from './supporters/CheckButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class Footer extends React.Component {

    render() {
        const { Send, ChangeText } = this.props

        return (

            <ScrollView horizontal style={{
                height: 150,
                width: windowWidth,
                position: "absolute",
                top: windowHeight * 0.847,
                backgroundColor:"green",
                paddingTop:13
            }}>
                <View style={{paddingLeft:windowWidth*0.13 , paddingRight:10, opacity: 1,}}>
                <TextInput
                    style={{
                        height: 50,
                        width: 230,
                        borderColor: '#000000',
                        borderWidth: 1,
                    }}
                    onChangeText={ChangeText}
                />
                </View>
                <CheckButton Send={Send} />

                
            </ScrollView>
        )
    }
}

export default Footer;