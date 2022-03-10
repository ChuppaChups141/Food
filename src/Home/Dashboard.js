import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import Input from '../components/Input';

const Dashboard = ({navigation}) => {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={styles.main}>
      <Header
        btnLeft="navicon"
        btnRight="bell"
        name="Home"
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
      <View style={{alignItems: 'center', marginVertical: 25}}>
        <Input
          labelValue={search}
          onChangeText={setSearch}
          placeholderText="Find food here..."
          placeholderTextColor="#a5a3a3"
          bgColor="#f2f2f2"
          bdColor="#f2f2f2"
          iconType="user"
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
