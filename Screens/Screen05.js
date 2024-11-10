import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Screen05 = () => {
  const navigation = useNavigation();

  const handlePressImage87 = () => {
    navigation.navigate('Screen04');
  };

  const handlePressA34 = () => {
    navigation.navigate('Screen02');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={handlePressA34}>
            <Image source={require('../assets/image/ArtistProfile/a34.png')} style={styles.topImage} />
          </TouchableOpacity>
        </View>
        <Image source={require('../assets/image/page5/Image63.png')} style={styles.fullWidthImage} />
        <Image source={require('../assets/image/ArtistProfile/a32.png')} style={styles.fullWidthImage} />
        <View style={styles.imageContainer}>
          <View style={styles.imageRow}>
            <Image source={require('../assets/image/AudioListing-SearchResults/Image84.png')} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Let you free</Text>
              <Text style={styles.infoText}>Anthony Taylor</Text>
              <Text style={styles.infoText}>68M     •3:35</Text>
            </View>
          </View>
          <View style={styles.imageRow}>
            <Image source={require('../assets/image/AudioListing-SearchResults/Image86.png')} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>BLINDING LIGHTS</Text>
              <Text style={styles.infoText}>Brian Bailey</Text>
              <Text style={styles.infoText}>93M     •4:39</Text>
            </View>
          </View>
          <View style={styles.imageRow}>
            <Image source={require('../assets/image/AudioListing-SearchResults/Image87.png')} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>FLOWER</Text>
              <Text style={styles.infoText}>Jessica Gonzalez</Text>
              <Text style={styles.infoText}>2,1M     •3:36</Text>
            </View>
          </View>
          <View style={styles.imageRow}>
            <Image source={require('../assets/image/ArtistProfile/Image69.png')} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>levitating</Text>
              <Text style={styles.infoText}>Anthony Taylor</Text>
              <Text style={styles.infoText}>9M     •7:48</Text>
            </View>
          </View>
          <View style={styles.imageRow}>
            <Image source={require('../assets/image/ArtistProfile/Image70.png')} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Astronaut in the Ocean</Text>
              <Text style={styles.infoText}>Pedro Moreno</Text>
              <Text style={styles.infoText}>23M     •3:36</Text>
            </View>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Albums</Text>
        <View style={styles.albumRow}>
          <View style={styles.albumCard}>
            <Image source={require('../assets/image/page5/Image71.png')} style={styles.albumImage} />
            <Text style={styles.albumTitle}>ME</Text>
            <Text style={styles.albumArtist}>Jessica Gonzalez</Text>
          </View>
          <View style={styles.albumCard}>
            <Image source={require('../assets/image/page5/Image72.png')} style={styles.albumImage} />
            <Text style={styles.albumTitle}>Magna nost</Text>
            <Text style={styles.albumArtist}>Jessica Gonzalez</Text>
          </View>
          <View style={styles.albumCard}>
            <Image source={require('../assets/image/page5/Image77.png')} style={styles.albumImage} />
            <Text style={styles.albumTitle}>Prodient</Text>
            <Text style={styles.albumArtist}>Jessica Gonzalez</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>About</Text>
        <Image source={require('../assets/image/page5/Image73.png')} style={styles.aboutImage} />
        <Text style={styles.aboutText}>
          Do in-cupidatat aute et in officia aute laboris estLorem est nisi dolor consequat voluptate duis irure.Veniam quis amet irure cillum elit aliquip sunt cillum cillum do aliqua voluptate ad non magna elit. Do ea n
        </Text>
        <Text style={styles.viewMore}>View more</Text>
        <Text style={styles.sectionTitle}>Fans also like</Text>
        <View style={styles.fansRow}>
          <View style={styles.fanCard}>
            <Image source={require('../assets/image/page5/Image74.png')} style={styles.fanImage} />
            <Text style={styles.fanTitle}>Magna nost</Text>
            <Text style={styles.fanArtist}>Jessica Gonzalez</Text>
          </View>
          <View style={styles.fanCard}>
            <Image source={require('../assets/image/page5/Image75.png')} style={styles.fanImage} />
            <Text style={styles.fanTitle}>Exerciltatio</Text>
            <Text style={styles.fanArtist}>Brian Harris</Text>
          </View>
          <View style={styles.fanCard}>
            <Image source={require('../assets/image/page5/Image76.png')} style={styles.fanImage} />
            <Text style={styles.fanTitle}>Tempor</Text>
            <Text style={styles.fanArtist}>Tyler An</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.taskbar}>
        <Image source={require('../assets/image/ArtistProfile/TabBarMenu5.png')} style={styles.taskbarImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 5,
  },
  topImage: {
    width: width * 0.1,
    height: width * 0.1,
    resizeMode: 'contain',
  },
  fullWidthImage: {
    width: '100%',
    height: width * 0.2,
    resizeMode: 'contain',
    marginVertical: 5,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: 10,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  image: {
    width: width * 0.15,
    height: width * 0.15,
    resizeMode: 'contain',
  },
  infoContainer: {
    marginLeft: 10,
  },
  infoText: {
    fontSize: 10,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  albumRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  albumCard: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  albumImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 8,
  },
  albumTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  albumArtist: {
    fontSize: 12,
    color: '#777',
  },
  aboutImage: {
    width: '100%',
    height: height * 0.2,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  viewMore: {
    fontSize: 14,
    color: '#00CED1',
    marginBottom: 10,
  },
  fansRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  fanCard: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  fanImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 8,
  },
  fanTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  fanArtist: {
    fontSize: 12,
    color: '#777',
  },
  taskbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskbarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Screen05;
