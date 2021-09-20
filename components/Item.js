import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

const Item = ({ item, navigation }) => {
    return(
    <TouchableOpacity style={styles.containerItem}
        onPress={()=>
            navigation.navigate('Detalhes', {item} )
        }>
        <Image source={item.img} style={styles.imagem} resizeMode='contain' />
        <Text>{item.title}</Text>
    </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    containerItem: {
        flex: 1,
        height: 170,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
        flexGrow: 1
    },
    imagem: {
        height: 100
    }
})

export default Item;