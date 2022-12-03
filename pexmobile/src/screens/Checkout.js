import React from 'react';
import {
  View, StatusBar, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import normalize from '../utils/normalize';

import SpaceCraftSVG from '../../assets/images/spacecraft.svg';
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  buy: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buyText: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  },
  line: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});

function Checkout(props) {
  const { navigation } = props;

  return (
    <View style={styles.sectionContainer}>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <View
        style={styles.buy}
      >
        <SpaceCraftSVG
          style={{
            marginBottom: 30,
          }}
        />
        <View
          style={styles.buyText}
        >
          <Title
            fontSize={24}
            lineHeight={30}
          >
            Obrigado pela sua compra
          </Title>
          <AppText
            marginBottom={30}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </AppText>
        </View>
      </View>
      <View style={styles.details}>
        <Title
          fontSize={14}
        >
          Detalhes da compra
        </Title>
        <View style={styles.line}>
          <AppText
            marginBottom={10}
          >
            Número da compra
          </AppText>
          <AppText
            marginBottom={10}
            color="black"
          >
            #45s5d4s
          </AppText>
        </View>
        <View style={styles.line}>
          <AppText
            marginBottom={10}
          >
            Quantidade de itens
          </AppText>
          <AppText
            marginBottom={10}
            color="#2ED573"
          >
            321
          </AppText>
        </View>
      </View>
      <Button onPress={() => navigation.navigate('Feedback')}>
        Acompanhar compra
      </Button>
    </View>
  );
}

Checkout.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Checkout;
