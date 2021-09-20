import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Cabecalho = ({ item, navigation }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.texto}>Lighteria</Text>
            <TouchableOpacity style={styles.boxIcon}
                onPress={() =>
                    navigation.navigate('Sacola', {item})
                }>
                <Image style={styles.imageIcon} source={require('../assets/images/icone-sacola.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    imageIcon: {
        width: 35,
        height: 35,
    },
    boxIcon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'white',
        
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerContainer: {
        backgroundColor: '#f3e3f5',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 7

    }
});

export default Cabecalho;
