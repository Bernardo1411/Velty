import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

import normalize from '../utils/normalize';

import PexLogoSVG from '../../assets/images/pexlogo.svg';
import BellSVG from '../../assets/images/bell.svg';
import CartSVG from '../../assets/images/cart.svg';
import LogoHomeSVG from '../../assets/images/logohome.svg';
import Product1SVG from '../../assets/images/product1.svg';
import BrandSVG from '../../assets/images/brands.svg';
import Brand2SVG from '../../assets/images/brand2.svg';
import Brand3SVG from '../../assets/images/brand3.svg';
import Brand4SVG from '../../assets/images/brand4.svg';
import Banner1SVG from '../../assets/images/Banner1.svg';
import Banner2SVG from '../../assets/images/Banner2.svg';
import Banner3SVG from '../../assets/images/Banner3.svg';
import AppText from '../components/atoms/Text';
import Title from '../components/atoms/Title';
import ScrollViewApp from '../containers/ScrollViewApp';
import Button from '../components/atoms/Button';

const styles = StyleSheet.create({
  sectionContainer: {
    width: normalize(375),
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  hearderContainer: {
    height: normalize(131),
    width: normalize(375),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  hearderLeftContainer: {
    height: '100%',
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logoContainer: {
    width: normalize(375),
    height: normalize(200),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  logoHome: {
    width: normalize(375),
    height: normalize(200),
    position: 'absolute',
    top: normalize(0),
    zIndex: -2,
  },
  logoHomeOverlay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: normalize(375),
    height: normalize(200),
    position: 'absolute',
    top: normalize(0),
    zIndex: -1,
    opacity: 0.5,
    backgroundColor: '#16161E',
    paddingLeft: normalize(30),
    paddingRight: normalize(150),
    paddingTop: normalize(30),
    paddingBottom: normalize(40),
  },
  listProducts: {
    width: normalize(375),
    height: normalize(300),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingLeft: normalize(20),
  },
  cardContainer: {
    width: normalize(141),
    height: normalize(223),
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#F1F0F3',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: normalize(10),
  },
  listProductsScroll: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  brandsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: normalize(375),
    height: normalize(85),
    paddingLeft: normalize(40),
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: normalize(37),
    height: normalize(470),
  },
  logoHomeCategory1: {
    marginBottom: normalize(5),
    position: 'absolute',
    bottom: normalize(295),
    zIndex: -1,
  },
  logoHomeCategory2: {
    marginBottom: normalize(5),
    position: 'absolute',
    bottom: normalize(149),
  },
  logoHomeCategory3: {
    marginBottom: normalize(5),
    position: 'absolute',
    bottom: normalize(3),
  },
});

function Home(props) {
  const { navigation } = props;

  return (
    <View style={styles.sectionContainer}>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <ScrollViewApp>

        <View
          style={styles.hearderContainer}
        >
          <PexLogoSVG
            width={normalize(94)}
            height={normalize(44)}
          />
          <View style={styles.hearderLeftContainer}>
            <CartSVG
              width={normalize(24)}
              height={normalize(24)}
            />
            <BellSVG
              width={normalize(24)}
              height={normalize(24)}
            />
          </View>
        </View>
        <View style={styles.logoContainer}>
          <LogoHomeSVG
            style={styles.logoHome}
            width={normalize(375)}
            height={normalize(200)}
          />
          <View style={styles.logoHomeOverlay}>
            <AppText
              color="#fff"
              fontWeight="500"
              fontSize={24}
            >
              Tudo com Frete grátis
            </AppText>
            <AppText
              color="#fff"
              fontWeight="500"
              fontSize={14}
            >
              Comprar agora
            </AppText>
          </View>
        </View>
        <View style={styles.listProducts}>
          <Title
            fontSize={14}
          >
            Produtos Populares
          </Title>
          <ScrollViewApp
            flexDirection="row"
            horizontal
          >
            <View style={styles.listProductsScroll}>
              <View style={styles.cardContainer}>
                <Product1SVG
                  width={normalize(125)}
                  height={normalize(108)}
                />
                <AppText
                  fontSize={8}
                >
                  Louças e metais
                </AppText>
                <Title
                  color="#000"
                  lineHeight={18}
                  fontWeight="500"
                  fontSize={12}
                >
                  Torneira Puravida Hansgrohe
                </Title>
                <Button
                  onPress={() => navigation.navigate('ProductPage')}
                  width={normalize(125)}
                  height={normalize(25)}
                  borderRadius={12}
                  fontSize={8}
                >
                  Comprar
                </Button>
              </View>
              <View style={styles.cardContainer}>
                <Product1SVG />
                <AppText
                  fontSize={8}
                >
                  Louças e metais
                </AppText>
                <Title
                  color="#000"
                  lineHeight={18}
                  fontWeight="500"
                  fontSize={12}
                >
                  Torneira Puravida Hansgrohe
                </Title>
                <Button
                  onPress={() => navigation.navigate('ProductPage')}
                  width={normalize(125)}
                  height={normalize(25)}
                  borderRadius={12}
                  fontSize={8}
                >
                  Comprar
                </Button>
              </View>
              <View style={styles.cardContainer}>
                <Product1SVG />
                <AppText
                  fontSize={8}
                >
                  Louças e metais
                </AppText>
                <Title
                  color="#000"
                  lineHeight={18}
                  fontWeight="500"
                  fontSize={12}
                >
                  Torneira Puravida Hansgrohe
                </Title>
                <Button
                  onPress={() => navigation.navigate('ProductPage')}
                  width={normalize(125)}
                  height={normalize(25)}
                  borderRadius={12}
                  fontSize={8}
                >
                  Comprar
                </Button>
              </View>
            </View>
          </ScrollViewApp>
        </View>
        <View style={styles.brandsContainer}>
          <ScrollViewApp
            flexDirection="row"
            horizontal
          >
            <View style={styles.listProductsScroll}>
              <BrandSVG style={{
                marginRight: normalize(20),
              }}
              />
              <Brand2SVG
                style={{
                  marginRight: normalize(20),
                }}
              />
              <Brand3SVG
                style={{
                  marginRight: normalize(20),
                }}
              />
              <Brand4SVG
                style={{
                  marginRight: normalize(20),
                }}
              />
              <BrandSVG
                style={{
                  marginRight: normalize(20),
                }}
              />
            </View>
          </ScrollViewApp>
        </View>
        <View style={styles.categoryContainer}>
          <Banner1SVG
            style={styles.logoHomeCategory1}
            width={normalize(375)}
            height={normalize(146)}
          />
          <Banner2SVG
            style={styles.logoHomeCategory2}
            width={normalize(375)}
            height={normalize(146)}
          />
          <Banner3SVG
            style={styles.logoHomeCategory3}
            width={normalize(375)}
            height={normalize(146)}
          />
        </View>
      </ScrollViewApp>
    </View>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
