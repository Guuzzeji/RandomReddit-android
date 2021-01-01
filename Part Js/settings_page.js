import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal } from 'react-native';

function page_settings(props){
    const [text_var, set_text] = useState('')
    const [show_text, set_show] = useState(false)

    function textin(text){
        let x = text
        let lower = x.toLowerCase()
        set_text(lower)
    }

    function Submit_btn(){
        if(text_var != ''){
            props.set_reddit(text_var)
            set_show(true)            
        }else{
            props.set_reddit('dankmemes')  
        }
    }

    return(
        <Modal animationType='fade' visible={props.visible} transparent={false} onRequestClose={function(){props.set_vis(false)}}>
            <View style={{backgroundColor:'#00000'}}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={function(){props.set_vis(false)}}>
                        <Text style={styles.back_btn}>Go Back</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize:20, color:'#fff', paddingBottom:20}}>Settings</Text>
                    <TextInput style={styles.input} placeholder='Type in your own subreddit...' onChangeText={textin}/>
                    <TouchableOpacity style={{paddingTop:10, alignSelf:'center'}} onPress={Submit_btn}>
                        <Text style={styles.btn}>Submit</Text>
                    </TouchableOpacity>
                    <Text style={{color:'#fff'}}>Note: This app only work for image base subreddit, web url will not work.</Text>
                    <View>
                        <Text style={{color:'#3bff29', paddingTop:10}}>Subreddit has been change to r/{text_var}</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        padding:15,
        paddingTop:10,
        width:'100%',
        height:'100%',
    },

    input: {
        color:'#ffff',
        borderWidth: 1,
        borderRadius:10,
        borderColor:'#ffff',
        padding:10
    },


    back_btn:{
        color:'#ff3399',
        fontSize:18,
        paddingBottom:20,
        paddingLeft:10
    },

    btn:{
        color:'#ff3399',
        fontSize:18,
        paddingBottom:20,
    },
})


module.exports = page_settings