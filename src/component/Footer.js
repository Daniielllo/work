import React from 'react';
import { TextInput, View, Dimensions, ScrollView } from "react-native";
import CheckButton from './supporters/CheckButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tempText = [""]

class Footer extends React.Component {

    render() {
        const { Send } = this.props

        return (

            <ScrollView horizontal style={{
                height: 150,
                width: windowWidth,
                position: "absolute",
                top: windowHeight * 0.87,
                backgroundColor:"green",
                paddingTop:15
            }}>
                <View style={{paddingLeft:windowWidth*0.13 , paddingRight:10}}>
                <TextInput
                    style={{
                        height: 50,
                        width: 230,
                        borderColor: '#000000',
                        borderWidth: 1,
                    }}
                    onChangeText={text => tempText[0] = text}
                />
                </View>
                <CheckButton style={{}} Send={Send} Text={tempText} />
                
            </ScrollView>
        )
    }
}

export default Footer;