import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Button
} from 'react-native'
import React from 'react';

const { width } = Dimensions.get("window");

const ProductCard = (props) => {

    const { name, price, image, countInStock } = props;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: (image) ? image : "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg" }} resizeMode={"contain"}/>
            <View style={styles.card} />
            <Text style={styles.title}>
                {name.length > 15 ? name.substring(0, 15 - 3) + "..." : name}
            </Text>
            <Text style={styles.price}>
                ${price}
            </Text>
            {
                countInStock > 0 ?
                    <View style={{ marginBottom: 60 }}>
                        <Button title={"Add"} color={"green"} />
                    </View>
                    :
                    <Text style={{color: "red"}}>Out Of Stock</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: (width / 2) - 20,
        height: (width / 1.8) - 1.7,
        padding: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: "center",
        borderRadius: 10,
        elevation: 8,
        backgroundColor: "white"
    },
    image: {
        position: "absolute",
        top: -45,
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: "transparent",
    },
    card: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 90,
        marginBottom: 10,
        backgroundColor: "transparent",
    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "center"
    },
    price: {
        fontSize: 20,
        color: "orange",
        marginTop: 10,
        marginBottom: 10
    }
})

export default ProductCard;
