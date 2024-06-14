import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity
 } from "react-native";

 import {Feather} from  '@expo/vector-icons'

 const statusbarhigh = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

 export default function Header({ name}){
    return(
        <View style={style.container}>

            <View style={style.content}>
                <Text style={style.userName}>{name}</Text>

                <TouchableOpacity activeOpacity={0.9} style={style.buttonUser}>
                    <Feather name='user' size={30} color='#fff'/>
                </TouchableOpacity>
            </View>
        </View>
    )

 }

 const style = StyleSheet.create({
    container:{
        backgroundColor: '#8000ff',
        paddingTop: statusbarhigh,
        flexDirection:'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
   },
   content:{
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
   },
   userName:{
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff"
   },
   buttonUser:{
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44 / 2,
    }
 })