import { ImageBackground, StyleSheet, Text } from 'react-native';

export default function Index() {
  return (
    <ImageBackground
      source={require('@assets/images/background-image.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <Text style={styles.text}>Olá, mundo!</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});
