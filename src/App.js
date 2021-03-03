import React, { Component } from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import {Button, ButtonDone, ButtonPrev, ButtonNext} from "./component/Button";
import Counter from "./component/Counter";
import HeadScroll from "./component/HeadScroll";

// const styles = StyleSheet.create({
//     picture:{
//         width:'50%',
//         height:'100%',
//     },
// });

class App extends React.Component {
    
    render() {
        // let picture = ["https://shop.salonsecret.ru/media/wysiwyg/blog/post/podkova-morzh-karandash-samye-modnye-vidy-usov/glav.jpg",
        //  "https://tesakov.com/image/catalog/samooborona/boroda/usi-morzh.jpg",
        //   "https://balashiha.charuni.ru/wp-content/uploads/2017/03/mr.incredibeard-e1490173864485.jpg",
        //    "https://content.onliner.by/news/820x5616/48ac85682dd1d592548c19670127095f.jpeg",
        //     "https://content.onliner.by/news/820x5616/d4e03f4da3945acb47203b5b3a268eee.jpeg"];
         
        return (
            <HeadScroll/>
        )
    }
}

export default App;