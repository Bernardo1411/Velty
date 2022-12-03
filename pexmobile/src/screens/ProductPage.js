import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import normalize from '../utils/normalize';

import SpaceCraftSVG from '../../assets/images/spacecraft.svg';
import Product1SVG from '../../assets/images/product1.svg';
import Title from '../components/atoms/Title';
import AppText from '../components/atoms/Text';
import ScrollViewApp from '../containers/ScrollViewApp';
import Button from '../components/atoms/Button';
import Modal from '../containers/Modal';

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
  details: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
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

function ProductPage(props) {
  const { navigation } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  return (
    <View style={styles.sectionContainer}>
      <Modal
        isVisible={isVisible}
        onBackButtonPress={() => setIsVisible(false)}
        onBackdropPress={() => setIsVisible(false)}
      >
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Title
            fontSize={14}
            lineHeight={60}
          >
            Detalhes do Produto
          </Title>
        </View>
        <View
          style={styles.details}
        >
          <Title
            fontSize={14}
            lineHeight={40}
          >
            Descrição
          </Title>
          <AppText
            marginBottom={60}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AppText>
        </View>
        <View
          style={styles.details}
        >
          <Title
            fontSize={14}
            lineHeight={40}
          >
            Detalhes
          </Title>
          <AppText
            marginBottom={60}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AppText>
        </View>
        <View
          style={styles.details}
        >
          <Title
            fontSize={14}
            lineHeight={40}
          >
            Outras informações
          </Title>
          <AppText
            marginBottom={60}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AppText>
        </View>
      </Modal>
      <Modal
        isVisible={isVisible2}
        onBackButtonPress={() => setIsVisible2(false)}
        onBackdropPress={() => setIsVisible2(false)}
      >
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
              Adicionar ao carrinho
            </Title>
            <AppText
              marginBottom={60}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AppText>
          </View>
          <Button
            onPress={() => navigation.navigate('Home')}
            backgroundColor="#fff"
            color="#000"
          >
            Continuar comprando
          </Button>
          <View style={{
            height: 5,
          }}
          />
          <Button
            onPress={() => { navigation.navigate('Checkout'); }}
          >
            Finalizar cotação
          </Button>
        </View>
      </Modal>
      <ScrollViewApp
        horizontal
        flexGrow={0}
      >
        <View
          style={styles.scrollImages}
        >
          <Product1SVG
            onPress={() => setIsVisible(true)}
            style={styles.images}
            width={normalize(311)}
            height={normalize(334)}
          />
          <Product1SVG
            onPress={() => setIsVisible(true)}
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
      <Button onPress={() => setIsVisible2(true)}>
        Comprar agora
      </Button>
    </View>
  );
}

ProductPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProductPage;
