import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const width = Dimensions.get('window').width;

const Header = ({btnLeft, btnRight, name, navigation, ...rest}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity {...rest}>
        <Icon name={btnLeft} size={25} color="#000" />
      </TouchableOpacity>

      <Text style={styles.headerName}>{name}</Text>

      <Icon name={btnRight} size={25} color="#000" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
});
