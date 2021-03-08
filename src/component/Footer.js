import React from 'react';
import { TextInput, View, Dimensions, ScrollView } from "react-native";
import CheckButton from './supporters/CheckButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height * 0.7;

const tempText = [""]

class Footer extends React.Component {

    render() {
        const { Send } = this.props

        return (

            <ScrollView horizontal style={{
                height: 150,
                width: windowWidth,
                position: "absolute",
                top: windowHeight,
            }}>
                <TextInput
                    style={{
                        height: 40,
                        width: 230,
                        borderColor: '#000000',
                        borderWidth: 1,
                    }}
                    onChangeText={text => tempText[0] = text}
                />
                <CheckButton style={{}} Send={Send} Text={tempText} />
            </ScrollView>
        )
    }
}

export default Footer;