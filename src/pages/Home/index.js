import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import Header, {} from '../../Components/Header'
import Balance from '../../Components/Balance';
import Moviments from '../../Components/moviments';

const list = [
{
    id: 1,
    label: 'boleto conta lux',
    value: '300,00',
    data: '15/06/2024',
    type: 0 // despesas
},
{
    id: 2,
    label: 'pix cliente x',
    value: '1,900,00',
    data: '20/06/2024',
    type: 1 // entradas
},
{
    id: 3,
    label: 'salario',
    value: '1,500,00',
    data: '21/06/2024',
    type: 1 // entradas
},
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name='Gabriel Andrade Correa'/>

        <Balance saldo='1,500,00' gastos='950,00'/>

        <Text style={styles.tilte}>Ultimas movimentaoes</Text>

        <FlatList
         style={styles.list}
         data={list}
         keyExtractor={ (item)=> String(item.id)}
         showsHorizontalScrollIndicator= {false}
         renderItem={ ({item})=> <Moviments data={item}/>}
         />
         
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  tilte:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,

  },
  list:{
    marginStart: 14,
    marginEnd: 14,
    
  }
});
