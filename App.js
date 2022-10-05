import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from "./Shared/Header";
import ProductContainer from './Screens/Products/ProductsContainer';

export default function App() {

  return (
    <View style={styles.container}>
      <Header />
      <ProductContainer /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
