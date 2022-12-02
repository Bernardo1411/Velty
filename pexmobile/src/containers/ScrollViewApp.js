import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  sectionContainerScroll: {
    flexGrow: 1,
  },
  contentContainerScroll: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

// Container that allow scrolling content
// less afficient and should be used only when the amount of content is small and alrady known
function ScrollViewApp(props) {
  const {
    children, showsVerticalScrollIndicator,
    flexDirection,
    horizontal,
    flexGrow,
  } = props;
  return (
    <ScrollView
      style={[styles.sectionContainerScroll, {
        flexDirection,
        flexGrow,
      }]}
      contentContainerStyle={styles.contentContainerScroll}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      horizontal={horizontal}
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

ScrollViewApp.defaultProps = {
  showsVerticalScrollIndicator: false,
  flexDirection: 'column',
  horizontal: false,
  flexGrow: 1,
};

ScrollViewApp.propTypes = {
  children: PropTypes.node.isRequired,
  showsVerticalScrollIndicator: PropTypes.bool,
  flexDirection: PropTypes.string,
  horizontal: PropTypes.bool,
  flexGrow: PropTypes.number,
};

export default ScrollViewApp;
