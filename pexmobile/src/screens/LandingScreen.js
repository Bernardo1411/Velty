import React from 'react';
import {
  StatusBar, StyleSheet, View, Text,
} from 'react-native';
import PropTypes from 'prop-types';

import PexLogoSVG from '../../assets/images/pexlogo.svg';
import BackgroundSVG from '../../assets/images/background.svg';
import ArrowLeftSVG from '../../assets/images/arrowleft.svg';
import RoundButton from '../components/atoms/RoundButton';

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
    width: '100%',
  },
  tileText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 32,
    color: '#000000',
    lineHeight: 41,
    marginBottom: 16,
    width: '83%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  desciptText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    color: '#999999',
    width: '83%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
        <Text style={styles.tileText}>Bem vindo a PEX</Text>
        <Text style={styles.desciptText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam eget ligula eu lectus lobortis condimentum.
          Aliquam nonummy auctor massa.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <RoundButton
          onPress={() => navigation.navigate('Login')}
        >
          <ArrowLeftSVG
            width={24}
            height={24}
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
