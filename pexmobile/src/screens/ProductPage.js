import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import normalize from '../utils/normalize';

import Product1SVG from '../../assets/images/product1.svg';
import Title from '../components/atoms/Title';
import AppText from '../components/atoms/Text';
import ScrollViewApp from '../containers/ScrollViewApp';
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
  },
  scrollImages: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: normalize(20),
    height: normalize(340),
    minWidth: normalize(670),
  },
  images: {
    marginRight: normalize(10),
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '80%',
  },
});

function ProductPage() {
  return (
    <View style={styles.sectionContainer}>
      <ScrollViewApp
        horizontal
        flexGrow={0}
      >
        <View style={styles.scrollImages}>
          <Product1SVG
            style={styles.images}
            width={normalize(311)}
            height={normalize(334)}
          />
          <Product1SVG
            style={styles.images}
            width={normalize(311)}
            height={normalize(334)}
          />
        </View>
      </ScrollViewApp>
      <View style={styles.textContainer}>
        <AppText>
          Louças e Metais
        </AppText>
        <Title
          fontSize={24}
        >
          TORNEIRA HANSGROHE
        </Title>
      </View>
      <View style={[styles.textContainer, {
        marginBottom: normalize(40),
      }]}
      >
        <Title
          fontSize={14}
        >
          TORNEIRA HANSGROHE
        </Title>
        <AppText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam eget ligula eu lectus lobortis condimentum.
          Aliquam nonummy auctor massa.
        </AppText>
      </View>
      <Button onPress={() => {}}>
        Comprar agora
      </Button>
    </View>
  );
}

export default ProductPage;
