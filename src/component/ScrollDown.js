import React from 'react';
import { FlatList, Dimensions } from 'react-native';
import { renderItem } from './supporters/helpers';
const windowHeight = Dimensions.get('window').height;

class ScrollDown extends React.Component {

    render(){
        const { mass } = this.props
        return(
            <FlatList
                style={{bottom:windowHeight*0.10}}
                data={mass}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        )
    }
}

export default ScrollDown;