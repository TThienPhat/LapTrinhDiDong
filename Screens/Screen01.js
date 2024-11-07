import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Screen01() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handlePress = () => {
    navigation.navigate('Screen02');
  };

  return (
    <View style={styles.container}>
      {/* Hình ảnh Nen1 ở giữa màn hình */}
      <Image
        source={require('../assets/image/LaunchScreen/Nen1.png')}
        style={styles.mainImage}
      />

      {/* Các đối tượng chồng lên Nen1 */}
      <View style={styles.overlayContainer}>
        {/* Logo hoặc biểu tượng âm nhạc */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/image/LaunchScreenPremium/Image113.png')}
            style={styles.logo}
          />
        </View>

        {/* Phần chữ "Your music, Your artists" */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Your music</Text>
          <Text style={styles.title}>Your artists</Text>
        </View>

        {/* Nút "Create an account" */}
        <TouchableOpacity style={styles.createAccountButton} onPress={handlePress}>
          <Text style={styles.buttonText}>Create an account</Text>
        </TouchableOpacity>

        {/* Nút "I already have an account" */}
        <TouchableOpacity style={styles.existingAccountButton} onPress={handlePress}>
          <Text style={styles.existingButtonText}>I already have an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  mainImage: {
    width: '30%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  overlayContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 36,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  createAccountButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 25,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  existingAccountButton: {
    backgroundColor: 'rgba(173, 216, 230, 0.7)',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  existingButtonText: {
    color: 'black',
    fontSize: 18,
  },
});
