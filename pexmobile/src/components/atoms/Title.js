import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  title: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 32,
    color: '#000000',
    lineHeight: 41,
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// As the name say
// Just round button
function Title(props) {
  const {
    children,
    marginBottom,
    fontStyle,
    fontWeight,
    fontSize,
    color,
    lineHeight,
    display,
    flexDirection,
    justifyContent,
    alignItems,
  } = props;

  return (
    <Text
      style={[
        styles.title,
        {
          marginBottom,
          fontStyle,
          fontWeight,
          fontSize,
          color,
          lineHeight,
          display,
          flexDirection,
          justifyContent,
          alignItems,
        },
      ]}
    >
      {children}
    </Text>
  );
}

Title.defaultProps = {
  marginBottom: 16,
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: 32,
  color: '#000000',
  lineHeight: 41,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  marginBottom: PropTypes.number,
  fontStyle: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  lineHeight: PropTypes.number,
  display: PropTypes.string,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
};

export default Title;
