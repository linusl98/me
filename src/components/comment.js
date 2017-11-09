import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    paddingTop: 3,
  },
  user: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingRight: 8,
  },
  comment: {
    fontWeight: 'normal',
    fontSize: 13,
  },
});

const propTypes = {};

const defaultProps = {};

function Comment(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.user}>{`${props.user} says: `}</Text>
      <Text style={styles.comment}>{props.text}</Text>
    </View>
  );
}

Comment.propTypes = propTypes;
Comment.defaultProps = defaultProps;

export default Comment;
