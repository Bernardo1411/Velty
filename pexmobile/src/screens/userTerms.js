import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import normalize from '../utils/normalize';

import ArrowLeftSVG from '../../assets/images/leftarrow.svg';
import DownloadSVG from '../../assets/images/download.svg';
import DownButtonSVG from '../../assets/images/downarrow.svg';
import AppText from '../components/atoms/Text';
import Title from '../components/atoms/Title';
import ScrollViewApp from '../containers/ScrollViewApp';
import RoundButton from '../components/atoms/RoundButton';

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    width: normalize(375),
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerContainer: {
    width: normalize(375),
    height: normalize(50),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: normalize(30),
    paddingRight: normalize(30),
  },
  bodyContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: normalize(302),
  },
  bottomContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(375),
    height: normalize(150),
    position: 'absolute',
    bottom: 0,
  },
});

function UserTerm(props) {
  const { navigation } = props;

  return (
    <View style={styles.sectionContainer}>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Text>
            <ArrowLeftSVG />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
        >
          <Text>
            <DownloadSVG />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <AppText>Ultima atualização: Outubro/2022</AppText>
        <Title lineHeight={normalize(60)}>Termos de uso</Title>
      </View>
      <ScrollViewApp
        showsVerticalScrollIndicator
      >
        <View style={styles.cardContainer}>
          <Title
            fontSize={14}
            fontWeight="500"
            marginBottom={0}
          >
            1. Termos
          </Title>
          <AppText
            marginBottom={25}
          >
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </AppText>
          <Title
            fontSize={14}
            fontWeight="500"
            marginBottom={0}
          >
            2. Licença de uso
          </Title>
          <AppText
            marginBottom={25}
          >
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </AppText>
          <Title
            fontSize={14}
            fontWeight="500"
            marginBottom={0}
          >
            1. Termos
          </Title>
          <AppText
            marginBottom={25}
          >
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </AppText>
        </View>
      </ScrollViewApp>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0) -1.65%', 'rgba(255, 255, 255, 0.75) 39.56%', '#FFFFFF']}
        style={styles.bottomContent}
      >
        <RoundButton
          onPress={() => navigation.navigate('SignUp')}
        >
          <DownButtonSVG />
        </RoundButton>
      </LinearGradient>
    </View>
  );
}

UserTerm.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default UserTerm;
