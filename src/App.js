import React from 'react';
import { Text, View } from "react-native";
import Footer from "./component/Footer";

const temp = [0]

class App extends React.Component {
    state = {
        main: [
            ""
        ]
    }
    
    Send = (TextInput) =>{
        temp[0] = main[0]
        this.state.main[temp[0]] = TextInput
        this.state.main[0]++
    }
    


    render() {
        return (
            <View style={{ justifyContent: "center", alignItems: "center", flex:1}}>
                <Footer Send={this.Send}/>
            </View>
        )
    }
}

export default App;