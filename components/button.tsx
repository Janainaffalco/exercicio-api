import { StyleSheet, View, Text, Pressable } from 'react-native';


type Props = {
  label: string;
  
};

export default function Button({ label }: Props) { 
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('Você precisa pressionar o botão')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
});