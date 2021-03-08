import React from 'react';
import { Text, View } from "react-native";
import Footer from "./component/Footer";


class App extends React.Component {
    state = {
        main: [
            1,
            ""
        ]
    }
    
    Send = (TextInput) =>{
        this.state.main[main[0]] = TextInput
        this.state.main[0]++
    }
    


    render() {
        return (
            <View style={{ justifyContent: "center", alignItems: "center"}}>
                <Footer Send={this.Send}/>
            </View>
        )
    }
}

export default App;