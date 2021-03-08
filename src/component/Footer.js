import React from 'react';
import { TextInput, View } from "react-native";
import { ButtonSeed } from "./supporters/ButtonSeed"

const tempText = [""]

class Footer extends React.Component {

    render() {
        const { Send } = this.props

        return (

            <View style={{
                justifyContent: "space-between",
                alignItems: "flex-start"
            }}>
                <TextInput
                    style={{
                        height: 40,
                        width: 100,
                        borderColor: '#000000',
                        borderWidth: 1,
                    }}
                    onChangeText={text => tempText[0] = text}
                />
                <ButtonSeed Send={Send} Text={tempText} />
            </View>
        )
    }
}

export default Footer;