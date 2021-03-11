import React from 'react';
import { Text, View } from "react-native";
import Footer from "./component/Footer";
import ScrollDown from './component/ScrollDown';

const temp = [1]

class App extends React.Component {
    state = {
        main: [
            
            {
                line: "___________1",
                byed: false,
                id: 0
            },
            {
                line: "___________2",
                byed: false,
                id: 1
            },
            {
                line: "___________3",
                byed: false,
                id: 2
            },
            {
                line: "___________4",
                byed: false,
                id: 3
            },
            {
                line: "___________",
                byed: false,
                id: 4
            },
            {
                line: "___________",
                byed: false,
                id: 5
            },
            {
                line: "___________",
                byed: false,
                id: 6
            },
            {
                line: "___________",
                byed: false,
                id: 7
            },
            {
                line: "___________",
                byed: false,
                id: 8
            },
            {
                line: "___________",
                byed: false,
                id: 9
            },
            {
                line: "___________",
                byed: false,
                id: 10
            },
            {
                line: "___________",
                byed: false,
                id: 11
            },
            {
                line: "___________",
                byed: false,
                id: 12
            },
        ]
    }
    
    Send = (TextInput) =>{
        this.state.main[0]++
        // temp[0] = main[0]
        // this.state.main[temp[0]] = TextInput
    }
    


    render() {
        return (
            <View style={{ justifyContent: "center", alignItems: "center", flex:1}}>
                <ScrollDown mass={this.state.main}/>
                <Footer Send={this.Send}/>
            </View>
        )
    }
}

export default App;