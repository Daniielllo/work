import React from 'react';
import { TouchableOpacity, Image, View } from "react-native";

let source = "https://img1.freepng.ru/20180320/zfe/kisspng-red-x-x-mark-computer-icons-clip-art-red-x-png-5ab19105d9ebc7.5641284615215864378926.jpg"

class DelButton extends React.Component{
    render(){
        return(
        <TouchableOpacity style={{height:10, width: 10}}>
            <Image source={{uri: 'https://img1.freepng.ru/20180320/zfe/kisspng-red-x-x-mark-computer-icons-clip-art-red-x-png-5ab19105d9ebc7.5641284615215864378926.jpg'}}/>
        </TouchableOpacity>
        )
    }
}

export default DelButton;