import { View, StyleSheet} from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Ops! Página não encontrada!!"}} />
            <View style={styles.container}>
                <Link href="/" style={styles.button}>
                    Voltar
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
    },
    button:{
        fontSize: 20,
        color: "#fff",
        textDecorationLine: "underline",
    },
});