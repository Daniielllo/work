import React from 'react';
import { TouchableOpacity, Image } from "react-native";

class ButtonSeed extends React.Component {

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
        const { Send, Text } = this.props
        return (
            <TouchableOpacity onPress={() => {Send(Text)}}>
                <Image
                    style={
                        {
                            width: 30,
                            height: 30,
                            borderRadius: 40
                        }
                    }
                    source={{ uri: url }} />
            </TouchableOpacity>
        )
    }
}

export default ButtonSeed;