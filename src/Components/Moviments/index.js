import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
 } from 'react-native';

export default function moviments({data}) {
 return (
   <TouchableOpacity style={style.container}>
        <Text style={style.date}>{data.label}</Text>

        <View style={style.content}>
            <Text style={style.label}>{data.label}</Text>

            <Text style={data.type === 1 ? style.value : style.expenses}>
                {data.value}
            </Text>
        </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 24,
        borderBottomWidth: 2.5,
        borderBottomColor: "#dadada",
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    data:{
        color: '#dadada',
        fontWeight: 'bold',
    },
    label:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    value:{
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold'
    },
    expenses:{
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold'
    }
})