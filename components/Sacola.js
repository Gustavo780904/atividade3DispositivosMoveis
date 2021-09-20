import React from 'react';
import { Text } from 'react-native';

const Sacola = ({route}) => {
    return (
        <Text>teste {route.params.title}</Text>
    )
}

export default Sacola;