import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

import normalize from '../utils/normalize';

import FaceIdSVG from '../../assets/images/faceid.svg';
import LogoFaceIdSVG from '../../assets/images/logofaceid.svg';
import Title from '../components/atoms/Title';
import AppText from '../components/atoms/Text';
import Button from '../components/atoms/Button';

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    width: normalize(375),
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textContainer: {
    lex: 1,
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

function FaceId(props) {
  const { navigation } = props;

  return (
    <View style={styles.sectionContainer}>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <View style={styles.textContainer}>
        <Title
          fontSize={18}
          fontWeight="500"
        >
          Acesse com seu Face ID
        </Title>
        <AppText>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor.
        </AppText>
      </View>
      <FaceIdSVG />
      <Button
        onPress={() => navigation.navigate('Home')}
      >
        <LogoFaceIdSVG />
      </Button>
    </View>
  );
}

FaceId.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default FaceId;
