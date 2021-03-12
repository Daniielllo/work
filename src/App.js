import React from 'react';
import { Text, View } from "react-native";
import Footer from "./component/Footer";
import ScrollDown from './component/ScrollDown';

let mass = []

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
                line: "___________5",
                byed: false,
                id: 4
            },
            {
                line: "___________6",
                byed: false,
                id: 5
            },
            {
                line: "___________7",
                byed: false,
                id: 6
            },
            {
                line: "___________8",
                byed: false,
                id: 7
            },
            // {
            //     line: "___________9",
            //     byed: false,
            //     id: 8
            // },
            // {
            //     line: "___________10",
            //     byed: false,
            //     id: 9
            // },
            // {
            //     line: "___________11",
            //     byed: false,
            //     id: 10
            // }
        ],
        size: -1,
        temptext: {
            line: "",
            byed: false,
            id: 0
        },
    }

    ChangeText = (text) => {
        this.setState({temptext: {
            line:text,
            byed: false,
            id:this.state.size + 1
        } })
    }

    Send = () =>{
        const { main, temptext }  = this.state
        mass = main
        this.setState({size: this.state.size + 1})
        mass[this.state.size + 1] = temptext
        this.setState({main: mass})
    }
    


    render() {
        return (
            <View style={{ justifyContent: "center", alignItems: "center", flex:1}}>
                <ScrollDown mass={this.state.main}/>
                <Footer Send={this.Send} ChangeText={this.ChangeText}/>
            </View>
        )
    }
}

export default App;