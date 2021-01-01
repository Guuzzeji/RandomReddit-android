import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';

function open_img(props){
    return (
        <Modal animationType='fade' visible={props.visible} transparent={false} onRequestClose={function(){props.set_vis(false)}}>
            <View style={{backgroundColor:'#00000'}}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={function(){props.set_vis(false)}}>
                        <Text style={styles.back_btn}>Go Back</Text>
                    </TouchableOpacity>
                    <Image style={styles.img} source={{uri: props.img}} resizeMode="contain"/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        padding:10,
        paddingTop:10,
        width:'100%',
        height:'100%',
    },

    img:{
        flex:1,
        alignSelf:'stretch',
        width: undefined,
        height: undefined,
    },


    back_btn:{
        color:'#ff3399',
        fontSize:18,
        paddingBottom:20,
        paddingLeft:10
    }
})

module.exports = open_img