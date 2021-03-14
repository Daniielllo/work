import React from 'react';
import { FlatList, Dimensions, View, TouchableOpacity, Text, ScrollView } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

// const Item = ({ item, Buy }) => (
//     <View style={{ height: windowHeight * 0.12, width: windowWidth }}>
//         <TouchableOpacity style={{
//             padding: 30,
//             top: 80,
//             backgroundColor: "#ffcc00",
//             color: "#ffffff",

//         }} onPress={() => {  }}>
//             <Text style={{ textDecorationLine: item.byed == true ? "line-through" : "none" }}>{item.line}</Text>
//         </TouchableOpacity>

//     </View>
// );

// const renderItem = ({ item, Buy }) => (
//     <Item item={item} Buy={Buy} />
// );

class ScrollDown extends React.Component {


    // componentDidUpdate () {

    // }


    render() {
        const { mass, Buy } = this.props

        return (
            <ScrollView style={{ bottom: windowHeight * 0.10 }}>
                {
                    mass.map((item) => (
                        <View style={{ height: windowHeight * 0.12, width: windowWidth }}>
                            <TouchableOpacity style={{
                                padding: 30,
                                top: 80,
                                backgroundColor: "#ffcc00",
                                color: "#ffffff",

                            }} >
                                <Text style={{
                                    textDecorationLine: item.byed == "true" ? "line-through" : "none"
                                }}>
                                    {item.byed}
                                </Text>
                            </TouchableOpacity>

                        </View>
                    ))
                }

            </ScrollView>


            // <FlatList
            //     style={{bottom:windowHeight*0.10}}
            //     data={mass}
            //     renderItem={renderItem}
            //     keyExtractor={item => item.id}
            // />
        )
    }
}

export default ScrollDown;