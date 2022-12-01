import React from 'react';
import {
  Text, View, StyleSheet, StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

import LoginImage from '../../assets/images/imagelogin.svg';

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#F8F8F8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

function Login(props) {
  const { navigation } = props;

  return (
    <View style={styles.sectionContainer}>
      <StatusBar
        backgroundColor="#F8F8F8"
        barStyle="dark-content"
      />
      <View>
        <LoginImage width="100%" />
      </View>
    </View>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
