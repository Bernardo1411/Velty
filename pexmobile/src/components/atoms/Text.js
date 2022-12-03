import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  appText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    color: '#999999',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
});

// As the name say
// Just round button
function AppText(props) {
  const {
    children,
    fontStyle,
    fontWeight,
    fontSize,
    color,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    marginBottom,
    onPress,
  } = props;

  return (
    <Text
      style={[
        styles.appText,
        {
          fontStyle,
          fontWeight,
          fontSize,
          color,
          display,
          flexDirection,
          justifyContent,
          alignItems,
          marginBottom,
        },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
}

AppText.defaultProps = {
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: 14,
  color: '#999999',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 0,
  onPress: () => {},
};

AppText.propTypes = {
  children: PropTypes.string.isRequired,
  fontStyle: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  display: PropTypes.string,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  marginBottom: PropTypes.number,
  onPress: PropTypes.func,
};

export default AppText;
