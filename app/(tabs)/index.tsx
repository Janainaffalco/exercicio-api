import { View, StyleSheet } from 'react-native';

import Button from '@/components/button';
import { Image } from 'expo-image';

import ImageViewer from '@/components/imageViewer';

const PlaceholderImage = require('@/assets/images/background-image.jpg');



//<Image source={require('../../assets/images/background-image.jpg')} style={styles.image} />

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Escolha a foto" />
        <Button label="Use esta foto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer:{
    flex: 1/3,
    alignItems: 'center',
  },
});
