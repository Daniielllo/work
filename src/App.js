import React from 'react';
import { View } from "react-native";
import Footer from "./component/Footer";
import ScrollDown from './component/ScrollDown';

let mass = []

let tempom = ""

class App extends React.Component {
    state = {
        main: [

            {
                line: "___________1",
                byed: 0,
                id: 0
            },
            {
                line: "___________2",
                byed: 0,
                id: 1
            },
            {
                line: "___________3",
                byed: 0,
                id: 2
            },
            {
                line: "___________4",
                byed: 0,
                id: 3
            },
            {
                line: "___________5",
                byed: 0,
                id: 4
            },
            {
                line: "___________6",
                byed: 0,
                id: 5
            },
            {
                line: "___________7",
                byed: 0,
                id: 6
            },
            {
                line: "___________8",
                byed: 0,
                id: 7
            },
        ],
        size: -1,
        temptext: {
            line: "__________",
            byed: 0,
            id: 0
        },
    }

    ChangeText = (text) => {
        this.setState({
            temptext: {
                line: text,
                byed: 0,
                id: this.state.size + 1
            }
        })
    }

    Send = () => {
        const { main, temptext } = this.state
        mass = main
        if (this.state.size === mass.length - 2) {
            mass.push({
                line: "___________",
                byed: 0,
                id: this.state.size + 2
            })

        }
        this.setState({ size: this.state.size + 1 })
        mass[this.state.size + 1] = temptext
        this.setState({ main: mass })
    }

    Delite = () => {


    }

    render() {
        return (
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <ScrollDown main={this.state.main} Delite={this.Delite}/>
                <Footer Send={this.Send} ChangeText={this.ChangeText} />
            </View>
        )
    }
}

export default App;