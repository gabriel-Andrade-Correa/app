import React from 'react';
import {
     View,
     Text,
     StyleSheet,
    } from 'react-native';

export default function Balance({saldo, gastos}) {
 return (
   <View style={style.container}>    

        <View style={style.item}>
            <Text style={style.itemtitle}>Saldo</Text>
            <View style={style.content}>
                <Text style={style.currencySymblo}>R$</Text>
                <Text style={style.Balance}>
                    {saldo}
                    </Text>
            </View>
        </View>
        <View style={style.item}>
            <Text style={style.itemtitle}>gastos</Text>
            <View style={style.content}>
                <Text style={style.currencySymblo}>R$</Text>
                <Text style={style.expenses}>
                    {gastos}
                    </Text>
            </View>
        </View>

   </View>
  );
}

const style = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginEnd: 14,
        marginStart: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingTop: 22,
        zIndex: 99,
    },
    itemtitle:{
        fontSize: 20,
        color: '#dadada',       
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymblo:{
        color: '#dadada',
        marginRight: 6,
    },
    Balance:{
        fontSize: 22,
        color: '#2ecc71',
    },
    expenses:{
        fontSize: 22,
        color: "#e74c3c",
    }
})