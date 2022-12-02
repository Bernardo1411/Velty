import React, { useState, useRef } from 'react';
import {
  View, StyleSheet, StatusBar, TouchableOpacity, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import normalize from '../utils/normalize';

import {
  validateName, validatePhone, validateDate,
} from '../utils/validate';

import ArrowLeftSVG from '../../assets/images/leftarrow.svg';
import DownloadSVG from '../../assets/images/download.svg';
import EmailIconSVG from '../../assets/images/email.svg';
import ProfileSVG from '../../assets/images/profile.svg';
import CalendarSVG from '../../assets/images/calendar.svg';
import PhoneSVG from '../../assets/images/phone.svg';
import Title from '../components/atoms/Title';
import Input from '../components/atoms/input';
import Button from '../components/atoms/Button';
import ScrollViewApp from '../containers/ScrollViewApp';
import AppText from '../components/atoms/Text';

import { formatPhone, formatDate } from '../utils/formatInput';

const styles = StyleSheet.create({
  sectionContainer: {
    width: normalize(375),
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
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
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: normalize(375),
    height: normalize(200),
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: normalize(375),
  },
  bottomContainer: {
    width: '100%',
    height: normalize(150),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: normalize(40),
    paddingLeft: normalize(10),
    paddingRight: normalize(10),
  },
});

function SignUp(props) {
  const { navigation } = props;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const refInput1 = useRef();
  const refInput2 = useRef();
  const refInput3 = useRef();

  const signInInsert = () => {
    if (!validateName(name)
     || !validateDate(date)
     || !validatePhone(phone)) {
      setError('Campo inválido');
      return;
    }

    setError('');
    navigation.navigate('FaceId');
  };

  const editPhone = (phoneData) => {
    setPhone(formatPhone(phoneData));
  };

  const editDate = (dateData) => {
    setDate(formatDate(dateData));
  };

  return (
    <View style={styles.sectionContainer}>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <ScrollViewApp>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Text>
              <ArrowLeftSVG />
            </Text>
          </TouchableOpacity>
          <Title
            marginBottom={8}
            fontSize={14}
            fontWeight="500"
          >
            Dados pessoais
          </Title>
          <TouchableOpacity
            onPress={() => {}}
          >
            <Text>
              <DownloadSVG />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <ProfileSVG />
          <AppText
            color="#F09200"
            fontWeight="500"
          >
            Enviar foto
          </AppText>
        </View>
        <View style={styles.inputContainer}>
          <Input
            inputIcon={<EmailIconSVG />}
            textContentType="name"
            textAlign="left"
            autoComplete="name"
            placeholder="Nome completo"
            onChange={setName}
            value={name}
            returnKeyType="next"
            secureTextEntry={false}
            error={!validateName(name) ? error : ''}
            innerRef={refInput1}
            onSubmitEditing={() => refInput2.current.focus()}
          />
          <Input
            inputIcon={<CalendarSVG />}
            placeholder="Data de nascimento"
            textContentType="none"
            onChange={editDate}
            value={date}
            returnKeyType="next"
            maxLength={10}
            error={!validateDate(date) ? error : ''}
            innerRef={refInput2}
            onSubmitEditing={() => refInput3.current.focus()}
          />
          <Input
            inputIcon={<PhoneSVG />}
            placeholder="Telefone"
            textContentType="phone"
            onChange={editPhone}
            maxLength={15}
            value={phone}
            returnKeyType="go"
            error={!validatePhone(phone) ? error : ''}
            innerRef={refInput3}
            phone
          />
        </View>
        <View style={styles.bottomContainer}>
          <Button
            width={151}
            backgroundColor="#fff"
            color="#000"
            onPress={() => { navigation.navigate('Home'); }}
            borderColor="#B8B5C3"
          >
            Pular
          </Button>
          <Button
            width={151}
            onPress={signInInsert}
          >
            Cadastrar
          </Button>
        </View>
      </ScrollViewApp>
    </View>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUp;
