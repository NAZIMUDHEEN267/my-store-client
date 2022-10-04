import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ProductContainer from './Screens/Products/Products';

export default function App() {

  const data = () => {
    fetch("./assets/data.json").then(json => {
        return  json.json();
    }).then(data => {
      console.log(data);
    })
  }

  data();

  return (
    <View style={styles.container}>
      <ProductContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
