import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const width = Dimensions.get('window').width;
const Input = ({
  labelValue,
  placeholderText,
  iconType,
  iconHide,
  bgColor,
  bdColor,
  iconColor,
  ...rest
}) => {
  const [hide, setHide] = useState(true);
  return (
    <View
      style={[
        styles.inputContainer,
        {backgroundColor: bgColor, borderColor: bdColor},
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.iconStyle}>
          <Icon name={iconType} size={25} color={iconColor} />
        </View>
        <TextInput
          value={labelValue}
          style={styles.input}
          numberOfLines={1}
          placeholder={placeholderText}
          placeholderTextColor="#666"
          secureTextEntry={hide ? true : false}
          {...rest}
        />
      </View>
      <TouchableOpacity
        style={styles.hide}
        onPress={() => {
          setHide(!hide);
        }}>
        <Icon name={iconHide} size={20} color="#319f60" />
      </TouchableOpacity>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 1.1,
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  iconStyle: {
    paddingHorizontal: 15,
  },
  hide: {
    paddingRight: 10,
  },
  input: {
    width: 200,
  },
});
