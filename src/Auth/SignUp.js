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

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const createAccount = () => {};
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
      <Text style={styles.text1}>Start your </Text>
      <Text style={styles.text1}>healthy life now </Text>
      <Text style={styles.text2}>Lorem ipsum dolor sit amet</Text>
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
        labelValue={mail}
        onChangeText={setMail}
        placeholderText="Email"
        placeholderTextColor="#a5a3a3"
        bgColor="#fff"
        bdColor="#319f60"
        iconColor="#319f60"
        iconType="at"
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
        buttonTitle="SIGN UP"
        bgColor="#49c07c"
        onPress={() => {
          createAccount();
        }}
        buttonColor="#fff"
      />

      <Text style={styles.text3}>Already have an account?</Text>
      <Button
        buttonTitle="SIGN IN"
        bgColor="#ececec"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  wrapLogo: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
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
    textAlign: 'center',
    width: 250,
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
  text3: {
    color: '#a0a0a0',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
});
