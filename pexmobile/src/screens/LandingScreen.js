import React from 'react';
import {
  StatusBar, StyleSheet, View,
} from 'react-native';
import PropTypes from 'prop-types';

import normalize from '../utils/normalize';

import PexLogoSVG from '../../assets/images/pexlogo.svg';
import BackgroundSVG from '../../assets/images/background.svg';
import ArrowRightSVG from '../../assets/images/arrowright.svg';
import RoundButton from '../components/atoms/RoundButton';
import Title from '../components/atoms/Title';
import AppText from '../components/atoms/Text';

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    width: normalize(375),
    paddingHorizontal: 24,
    backgroundColor: '#F8F8F8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '45%',
  },
  backgroundImage: {
    zIndex: -1,
    position: 'absolute',
    top: 0,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    width: '85%',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    height: '15%',
    width: '80%',
  },
});

function LandingScreen(props) {
  const { navigation } = props;

  return (
    <View style={styles.sectionContainer}>
      <StatusBar
        backgroundColor="#F8F8F8"
        barStyle="dark-content"
      />
      <BackgroundSVG
        style={styles.backgroundImage}
        width={283}
        height={443}
      />
      <View style={styles.logoContainer}>
        <PexLogoSVG width={224} height={121} />
      </View>
      <View style={styles.textContainer}>
        <Title>Bem vindo a PEX</Title>
        <AppText style={styles.desciptText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam eget ligula eu lectus lobortis condimentum.
          Aliquam nonummy auctor massa.
        </AppText>
      </View>
      <View style={styles.buttonContainer}>
        <RoundButton
          onPress={() => navigation.navigate('Login')}
        >
          <ArrowRightSVG
            width={normalize(24)}
            height={normalize(24)}
          />
        </RoundButton>
      </View>
    </View>
  );
}

LandingScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LandingScreen;
