import React from 'react';
import { Text, View } from "react-native";
import Footer from "./component/Footer";
import ScrollDown from './component/ScrollDown';

const temp = [0]

class App extends React.Component {
    state = {
        main: [
            {
                line: "___________",
                byed: false
            },
            {
                line: "___________",
                byed: false
            },
            {
                line: "___________",
                byed: false
            },
            {
                line: "___________",
                byed: false
            },
            {
                line: "___________",
                byed: false
            },
            {
                line: "___________",
                byed: false
            },
            {
                line: "___________",
                byed: false
            },
            {
                line: "___________",
                byed: false
            },
            {
                line: "___________",
                byed: false
            },
            {
                line: "___________",
                byed: false
            },
            {
                line: "___________",
                byed: false
            },
            {
                line: "___________",
                byed: false
            },
            {
                line: "___________",
                byed: false
            },
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
                <ScrollDown mass={this.state.main}/>
            </View>
        )
    }
}

export default App;