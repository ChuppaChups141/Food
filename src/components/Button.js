import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
const width = Dimensions.get('window').width;

const Button = ({buttonTitle, bgColor, buttonColor, ...rest}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <Text style={[styles.buttonText, {color: buttonColor}]}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonContainer: {
    width: width / 1.1,
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 15,
    marginBottom: 20,
  },
});
