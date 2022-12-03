import React from 'react';
import {
  View, StatusBar, StyleSheet,
} from 'react-native';

import normalize from '../utils/normalize';

import CartPageSVG from '../../assets/images/cartpage.svg';
import AppText from '../components/atoms/Text';
import Title from '../components/atoms/Title';

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    width: normalize(375),
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buy: {
    width: '80%',
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
});

function Cart() {
  return (
    <View style={styles.sectionContainer}>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <View
        style={styles.buy}
      >
        <CartPageSVG
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
            Adicionar ao carrinho
          </Title>
          <AppText
            marginBottom={60}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </AppText>
        </View>
      </View>
    </View>
  );
}

export default Cart;
