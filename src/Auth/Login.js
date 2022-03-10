import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
const width = Dimensions.get('window').width;

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const loginAccount = () => {
    navigation.navigate('TabList', {screen: 'TabHome'});
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.wrapLogo}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/4163/4163765.png',
          }}
        />
      </View>
      <Text style={styles.text1}>Welcome back</Text>
      <Text style={styles.text2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </Text>
      <Input
        labelValue={name}
        onChangeText={setName}
        placeholderText="User Name"
        placeholderTextColor="#a5a3a3"
        bgColor="#fff"
        bdColor="#319f60"
        iconColor="#319f60"
        iconType="user"
      />
      <Input
        labelValue={password}
        onChangeText={setPassword}
        placeholderText="Password"
        placeholderTextColor="#a5a3a3"
        bgColor="#fff"
        bdColor="#319f60"
        iconColor="#319f60"
        iconType="lock"
        iconHide="eye"
      />
      <Button
        buttonTitle="LOGIN"
        bgColor="#49c07c"
        onPress={() => {
          loginAccount();
        }}
        buttonColor="#fff"
      />
      <View style={styles.social}>
        <View>
          <Text>Or sign in with</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Icon
            name="google"
            size={38}
            color="#de4d41"
            style={{marginRight: 20}}
          />
          <Icon name="facebook-square" size={38} color="#2563eb" />
        </View>
      </View>
      <Text style={styles.text3}>Don't have an account</Text>
      <Button
        buttonTitle="CREATE AN ACCOUNT"
        bgColor="#ececec"
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  wrapLogo: {
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.0,
    // elevation: 24,
    padding: 40,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  text1: {
    fontSize: 30,
    fontWeight: '500',
    color: '#393939',
  },
  text2: {
    color: '#595959',
    lineHeight: 25,
    textAlign: 'center',
    marginHorizontal: 34,
    marginTop: 15,
    marginBottom: 50,
    fontSize: 16,
  },
  social: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width / 1.2,
  },
  text3: {
    color: '#a0a0a0',
    fontSize: 16,
    marginTop: 40,
    marginBottom: 20,
  },
});
