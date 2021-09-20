import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { DATA } from "../util/Data";
import Item from "./Item";
import Cabecalho from "./Cabecalho"

const Produtos = ({ navigation }) => {
    return (
        <View style={estilos.container}>
            <Cabecalho />
            <View style={estilos.containerSeparador}>
                <View style={estilos.separador}></View>
                <Text style={estilos.textoLista}>Categorias</Text>
            </View>
            <FlatList
                data={DATA}
                numColumns={2}
                renderItem={({ item }) =>
                    <Item item={item} navigation={navigation} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3e3f5',
        paddingHorizontal: 20,
        paddingTop: 26
    },
    separador: {
        borderWidth: 0.5,
        borderColor: '#a4a4a5'
    },
    textoLista: {
        alignSelf: 'center',
        marginTop: -14,
        backgroundColor: '#f3e3f5',
        paddingHorizontal: 10,
        fontSize: 18,
        color: '#a4a4a5'
    },
    containerSeparador: {
        marginTop: 15,
        marginBottom: 15

    },

})

export default Produtos;