import React from 'react';
import {
  View, StatusBar, StyleSheet,
} from 'react-native';

import normalize from '../utils/normalize';

import ProgressOrder from '../../assets/images/Progress-Order.svg';
import AppText from '../components/atoms/Text';
import Title from '../components/atoms/Title';
import Button from '../components/atoms/Button';

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    width: normalize(375),
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 10,
  },
  details: {
    width: '80%',
    height: normalize(119),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderColor: '#F1F0F3',
    borderRadius: 12,
    borderWidth: 2,
    paddingLeft: normalize(15),
    paddingRight: normalize(15),
    marginBottom: normalize(20),
  },
  buttonsView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '80%',
    marginBottom: normalize(20),
    marginTop: normalize(20),
  },
});

function Feedback() {
  return (
    <View style={styles.sectionContainer}>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <View style={styles.buttonsView}>
        <Button
          width={normalize(151)}
          onPress={() => {}}
        >
          Recebidos
        </Button>
        <Button
          backgroundColor="white"
          color="black"
          width={normalize(151)}
          onPress={() => {}}
        >
          Aguardando
        </Button>
      </View>
      <View style={styles.details}>
        <AppText
          marginBottom={10}
        >
          Compra #d54fdg5e889w
        </AppText>
        <Title
          fontSize={14}
        >
          Realizada em 23/09/2022
        </Title>
        <ProgressOrder />
      </View>
      <View style={styles.details}>
        <AppText
          marginBottom={10}
        >
          Compra #d54fdg5e889w
        </AppText>
        <Title
          fontSize={14}
        >
          Realizada em 23/09/2022
        </Title>
        <ProgressOrder />
      </View>
    </View>
  );
}

export default Feedback;
