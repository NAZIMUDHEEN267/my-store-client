import { View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react';
import ProductCard from './ProductCard';

const { width } = Dimensions.get("window");

const ProductList = ({item}) => {
  return (
    <View>
        <TouchableOpacity style={{width: "50%"}}>
            <View style={{ width: width / 2, backgroundColor: "grainsboro" }}>
              <ProductCard {...item}/>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default ProductList