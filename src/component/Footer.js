import react from "react"
import { TextInput } from "react-native";

class Footer extends React.Component {


    render() {
        return (
            <TextInput
                style={{ height: 40,
                     width: 100,
                     borderColor: '#000000',
                     borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        )
    }
}

export default Footer;