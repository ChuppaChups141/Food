import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Button from '../components/Button';

const Onboard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.icon}>
        <View style={{elevation: 3}}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/4163/4163765.png',
            }}
          />
        </View>

        <Text style={styles.heading}>Sayur</Text>
        <Text style={styles.heading2}>Healthy Food Delivery</Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.heading3}>Healthy Food, For Breakfast</Text>
        </View>
        <Text style={styles.heading4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
        <View style={styles.dots}>
          <View style={styles.blurDot}></View>
          <View style={styles.blurDot}></View>
          <View style={styles.whiteDot}></View>
        </View>
        <Button
          buttonTitle="SIGN UP"
          bgColor="#ff9a3e"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          buttonColor="#fff"
        />
        <Button
          buttonTitle="LOGIN"
          bgColor="#49c07c"
          onPress={() => {
            navigation.navigate('Login');
          }}
          buttonColor="#fff"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#319f60',
  },
  icon: {alignItems: 'center', marginTop: 40},
  logo: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  heading: {
    fontSize: 30,
    color: '#fff',
    paddingVertical: 7,
  },
  heading2: {
    fontSize: 14,
    color: '#99ceb0',
  },
  heading3: {
    fontSize: 30,
    color: '#fff',
    marginTop: 120,
    flexShrink: 1,
    width: 300,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  heading4: {
    color: '#fff',
    marginHorizontal: 25,
    marginTop: 15,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
  },
  blurDot: {
    backgroundColor: '#99ceb0',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 8,
  },
  whiteDot: {
    backgroundColor: '#fff',
    width: 12,
    height: 12,
    borderRadius: 10,
  },
});
export default Onboard;
