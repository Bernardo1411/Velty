import React, { useState, useRef } from 'react';
import {
  Text, View, StyleSheet, StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import normalize from '../utils/normalize';

import {
  validateEmail, validatePassword,
} from '../utils/validate';

import SignupImage from '../../assets/images/imagesignup.svg';
import EmailIconSVG from '../../assets/images/email.svg';
import PasswordIconSVG from '../../assets/images/password.svg';
import Title from '../components/atoms/Title';
import AppText from '../components/atoms/Text';
import Input from '../components/atoms/input';
import Button from '../components/atoms/Button';
import ScrollViewApp from '../containers/ScrollViewApp';

const styles = StyleSheet.create({
  sectionContainer: {
    width: normalize(375),
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sectionContainerScroll: {
    flexGrow: 1,
  },
  contentContainerScroll: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '80%',
    height: normalize(120),
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  clickText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    color: '#F09200',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    width: '100%',
    height: normalize(150),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: normalize(40),
  },
  textBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '80%',
  },
});

function SignUp(props) {
  const { navigation } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const refInput1 = useRef();
  const refInput2 = useRef();

  const signInInsert = () => {
    if (!validateEmail(email)
     || !validatePassword(password)) {
      setError('Campo inválido');
      return;
    }

    setError('');
    navigation.navigate('SignUpFinal');
  };

  return (
    <View style={styles.sectionContainer}>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <ScrollViewApp
        showsVerticalScrollIndicator
      >
        <SignupImage width={normalize(375)} height={normalize(299)} />
        <View style={styles.textContainer}>
          <Title marginBottom={8}>Bem vindo a PEX!</Title>
          <AppText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AppText>
        </View>
        <View style={styles.inputContainer}>
          <Input
            inputIcon={<EmailIconSVG />}
            textContentType="emailAddress"
            textAlign="left"
            autoComplete="email"
            placeholder="Email"
            onChange={setEmail}
            value={email}
            returnKeyType="next"
            secureTextEntry={false}
            error={!validateEmail(email) ? error : ''}
            keyboardType="email-address"
            innerRef={refInput1}
            onSubmitEditing={() => refInput2.current.focus()}
          />
          <Input
            inputIcon={<PasswordIconSVG />}
            textContentType="password"
            autoComplete="password"
            placeholder="Senha"
            onChange={setPassword}
            value={password}
            returnKeyType="next"
            secureTextEntry
            error={!validatePassword(password) || error === 'Senha inválida' ? error : ''}
            innerRef={refInput2}
          />
          <View style={styles.textBottom}>
            <AppText>Li e aceito os</AppText>
            <Text
              style={styles.clickText}
              onPress={() => navigation.navigate('UserTerms')}
            >
              {' '}
              Termos de serviço
            </Text>
            <AppText> e política de privacidade</AppText>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Button onPress={signInInsert}>
            Continuar
          </Button>
          <View style={styles.textBottom}>
            <AppText>Já possui uma conta?</AppText>
            <Text
              style={styles.clickText}
              onPress={() => navigation.navigate('Login')}
            >
              {' '}
              Acessar
            </Text>
          </View>
        </View>
      </ScrollViewApp>
    </View>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUp;
