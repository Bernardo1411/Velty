import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import normalize from '../../utils/normalize';

const styles = StyleSheet.create({
  inputContainer: {
    width: normalize(311),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputSection: {
    width: normalize(311),
    height: normalize(56),
    backgroundColor: '#F8F8F9',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: normalize(20),
    paddingRight: normalize(10),
  },
  input: {
    width: '80%',
    height: '100%',
    marginLeft: normalize(10),
    color: '#000',
  },
  inputText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#ad0000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  codArea: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#B8B5C3',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: normalize(20),
  },
});

function Input(props) {
  const {
    inputIcon,
    onChange,
    onSubmitEditing,
    returnKeyType,
    placeholder,
    autoComplete,
    textContentType,
    secureTextEntry,
    keyboardType,
    value,
    maxLength,
    innerRef,
    error,
    phone,
  } = props;

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputSection}>
        {inputIcon}
        {phone && <Text style={styles.codArea}>+55 | </Text>}
        <TextInput
          style={styles.input}
          textContentType={textContentType}
          textAlign="left"
          autoComplete={autoComplete}
          onChangeText={onChange}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          keyboardType={keyboardType}
          value={value}
          maxLength={maxLength}
          ref={innerRef}
          multiline={false}
          placeholderTextColor="#B8B5C3"
        />
      </View>
      <Text style={styles.inputText}>{error}</Text>
    </View>
  );
}

Input.defaultProps = {
  placeholder: '',
  secureTextEntry: false,
  autoComplete: 'off',
  maxLength: 99999,
  keyboardType: 'default',
  onSubmitEditing: () => {},
  innerRef: () => {},
  error: '',
  phone: false,
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func,
  returnKeyType: PropTypes.string.isRequired,
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  inputIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  autoComplete: PropTypes.string,
  textContentType: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  value: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ component: PropTypes.instanceOf(React.Component) }),
  ]),
  error: PropTypes.string,
  phone: PropTypes.bool,
};

export default Input;
