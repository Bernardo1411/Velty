import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  roundButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F09200',
    borderRadius: 100,
    width: 62,
    height: 62,
  },
});

// As the name say
// Just round button
function RoundButton(props) {
  const { children, onPress } = props;

  const roudButton = (
    <TouchableOpacity
      style={styles.roundButtonContainer}
      onPress={onPress}
    >
      <Text>{children}</Text>
    </TouchableOpacity>
  );

  return roudButton;
}

RoundButton.defaultProps = {
  children: '+',
};

RoundButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  onPress: PropTypes.func.isRequired,
};

export default RoundButton;
