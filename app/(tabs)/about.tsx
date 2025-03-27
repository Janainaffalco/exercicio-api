import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function AboutScreen () {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>SOBRE</Text>
            <Link href="/" style={styles.button}>
                Voltar
                </Link>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
    button:{
        fontSize: 20,
        color: "#fff",
        textDecorationLine: "underline",
    },
});