import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const nen1Width = width * 0.3; // Giả sử Nen1 chiếm 30% chiều rộng màn hình

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Screen03');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Hàng trên cùng với logo và hình ảnh */}
        <View style={styles.topRow}>
          <Image source={require('../assets/image/HomeAudioListing/Image36.png')} style={styles.logo} />
          <View style={styles.topImages}>
            <Image source={require('../assets/image/HomeAudioListing/Chuong.png')} style={styles.topImage} />
            <Image source={require('../assets/image/HomeAudioListing/Avatar3.png')} style={styles.topImage} />
          </View>
        </View>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Good morning,</Text>
          <Text style={styles.userName}>Ashley Scott</Text>
          <TextInput 
            style={styles.searchBar} 
            placeholder="What you want to listen to" 
            placeholderTextColor="#999" 
          />
        </View>

        {/* Suggestions Section */}
        <Text style={styles.sectionTitle}>Suggestions for you</Text>
        <ScrollView horizontal contentContainerStyle={styles.horizontalScroll}>
          <Image source={require('../assets/image/HomeAudioListing/Container26.png')} style={styles.suggestionImage} />
          <Image source={require('../assets/image/HomeAudioListing/Container27.png')} style={styles.suggestionImage} />
        </ScrollView>

        {/* Charts Section */}
        <Text style={styles.sectionTitle}>Charts</Text>
        <ScrollView horizontal contentContainerStyle={styles.horizontalScroll}>
          <TouchableOpacity onPress={handlePress}>
            <Image source={require('../assets/image/HomeAudioListing/Container31.png')} style={styles.chartImage} />
          </TouchableOpacity>
          <Image source={require('../assets/image/HomeAudioListing/Container32.png')} style={styles.chartImage} />
          <Image source={require('../assets/image/HomeAudioListing/Container33.png')} style={styles.chartImage} />
        </ScrollView>

        {/* Trending Albums Section */}
        <Text style={styles.sectionTitle}>Trending albums</Text>
        <ScrollView horizontal contentContainerStyle={styles.horizontalScroll}>
          <View style={styles.albumCard}>
            <Image source={require('../assets/image/HomeAudioListing/Image45.png')} style={styles.albumImage} />
            <Text style={styles.albumTitle}>ME</Text>
            <Text style={styles.albumArtist}>Jessica Gonzalez</Text>
          </View>
          <View style={styles.albumCard}>
            <Image source={require('../assets/image/HomeAudioListing/Image46.png')} style={styles.albumImage} />
            <Text style={styles.albumTitle}>Magna nost</Text>
            <Text style={styles.albumArtist}>Brian Thomas</Text>
          </View>
          <View style={styles.albumCard}>
            <Image source={require('../assets/image/HomeAudioListing/Image47.png')} style={styles.albumImage} />
            <Text style={styles.albumTitle}>Magna</Text>
            <Text style={styles.albumArtist}>Christofer Ron</Text>
          </View>
        </ScrollView>

        {/* Popular Artists Section */}
        <Text style={styles.sectionTitle}>Popular artists</Text>
        <ScrollView horizontal contentContainerStyle={styles.horizontalScroll}>
          <View style={styles.artistCard}>
            <Image source={require('../assets/image/HomeAudioListing/Image39.png')} style={styles.artistImage} />
            <Text style={styles.artistName}>Jennifer Wilson</Text>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.artistCard}>
            <Image source={require('../assets/image/HomeAudioListing/Image40.png')} style={styles.artistImage} />
            <Text style={styles.artistName}>Elizabeth Hall</Text>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.artistCard}>
            <Image source={require('../assets/image/HomeAudioListing/Image41.png')} style={styles.artistImage} />
            <Text style={styles.artistName}>Anthony</Text>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>

      {/* Taskbar cố định ở dưới cùng */}
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
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  logo: {
    width: nen1Width * 0.1,
    height: nen1Width * 0.1,
    resizeMode: 'contain',
  },
  topImages: {
    flexDirection: 'row',
  },
  topImage: {
    width: nen1Width * 0.08,
    height: nen1Width * 0.08,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  header: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 10,
    color: '#333',
  },
  userName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  searchBar: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 6,
    fontSize: 10,
    width: '90%',
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  horizontalScroll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  suggestions: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  suggestionImage: {
    width: nen1Width * 0.25,
    height: nen1Width * 0.15,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  charts: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  chartImage: {
    width: nen1Width * 0.2,
    height: nen1Width * 0.2,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  albums: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  albumCard: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  albumImage: {
    width: nen1Width * 0.2,
    height: nen1Width * 0.2,
    borderRadius: 8,
  },
  albumTitle: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#333',
  },
  albumArtist: {
    fontSize: 6,
    color: '#777',
  },
  artists: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  artistCard: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  artistImage: {
    width: nen1Width * 0.12,
    height: nen1Width * 0.12,
    borderRadius: nen1Width * 0.06,
  },
  followButton: {
    backgroundColor: '#000',
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginTop: 5,
  },
  followText: {
    color: '#fff',
    fontSize: 8,
    fontWeight: 'bold',
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

export default HomeScreen;
