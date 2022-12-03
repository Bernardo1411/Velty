import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import normalize from '../../utils/normalize';

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F09200',
    borderRadius: 12,
    width: normalize(311),
    height: normalize(56),
  },
  buttonText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    color: '#fff',
    fontFamily: 'PlusJakartaSans-Regular',
  },
});

// As the name say
// Just round button
function Button(props) {
  const {
    children,
    onPress,
    backgroundColor = '#F09200',
    borderRadius = 12,
    width = normalize(311),
    height = normalize(56),
    fontStyle = 'normal',
    fontWeight = '500',
    fontSize = 14,
    color = '#fff',
  } = props;

  const roudButton = (
    <TouchableOpacity
      style={[styles.buttonContainer,
        {
          backgroundColor,
          borderRadius,
          width,
          height,
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText,
        {
          fontStyle,
          fontWeight,
          fontSize,
          color,
        },
      ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );

  return roudButton;
}

Button.defaultProps = {
  children: '+',
  backgroundColor: '#F09200',
  borderRadius: 12,
  width: normalize(311),
  height: normalize(56),
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: 14,
  color: '#fff',
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  onPress: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  fontStyle: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.number,
  color: PropTypes.string,
};

export default Button;
