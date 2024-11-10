import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Screen06 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('D:/LapTrinhDiDong/Project1/assets/image/SearchAudio/SearchAudio.png')}
        style={styles.fullScreenImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fullScreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
});

export default Screen06;
