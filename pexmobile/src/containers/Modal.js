import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Modal from 'react-native-modal';
import normalize from '../utils/normalize';

const styles = StyleSheet.create({
  modalContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '90%',
    width: normalize(375),
    backgroundColor: '#fff',
    elevation: 5,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
});

function MyModal(props) {
  const {
    children, isVisible, onBackButtonPress, onBackdropPress,
  } = props;

  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onBackButtonPress}
      onBackdropPress={onBackdropPress}
      swipeDirection="up"
      backdropColor="#EFEFEF"
      backdropOpacity={0.55}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: normalize(800),
        width: normalize(375),
        position: 'absolute',
        bottom: 0,
        left: -20,
      }}
    >
      <View style={styles.modalContainer}>
        {children}
      </View>
    </Modal>
  );
}

MyModal.defaultProps = {
  onBackButtonPress: () => {},
  onBackdropPress: () => {},
};

MyModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isVisible: PropTypes.bool.isRequired,
  onBackButtonPress: PropTypes.func,
  onBackdropPress: PropTypes.func,
};

export default MyModal;
