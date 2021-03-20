import React from 'react';
import { Dimensions, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import DelButton from './supporters/DelButton';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

let mass = []
let tempom = ""
let leto = 0
class ScrollDown extends React.Component {

    render() {
        const { main, Delite } = this.props
        mass = main
        return (
            <ScrollView style={{ bottom: windowHeight * 0.1 }}>
                {
                    main.map((item) => (
                        <View key={item.id} style={{ height: windowHeight * 0.12, width: windowWidth }}>
                            <TouchableOpacity style={{
                                padding: 30,
                                top: 80,
                                backgroundColor: "#ffcc00",
                                color: "#ffffff",

                            }} onPress={() => {
                                leto = main.findIndex(newItem => item.id == newItem.id)
                                mass[leto].byed == 0 ?
                                    tempom = {
                                        line: mass[leto].line,
                                        byed: 1,
                                        id: mass[leto].id
                                    } :
                                    tempom = {
                                        line: mass[leto].line,
                                        byed: 0,
                                        id: mass[leto].id
                                    }
                                mass[leto] = tempom
                                this.setState({ main: mass })
                            }}>
                                <Text style={{
                                    textDecorationLine: item.byed == 1 ? "line-through" : "none"
                                }}>
                                    {item.line}
                                </Text>
                            </TouchableOpacity>
                            <DelButton/>
                            {/* id={item.id} Delite={this.Delite} */}
                        </View>
                    ))
                }

            </ScrollView>
        )
    }
}

export default ScrollDown;