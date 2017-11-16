import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import Comment from './comment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 20,
  },
  statusText: {
    fontStyle: 'italic',
    textAlign: 'center',
    paddingBottom: 5,
  }
});

const propTypes = {};

const defaultProps = {};

function Post(props) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image style={{ width: 30, height: 30, paddingRight: 5 }} source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }}/>
        <TouchableOpacity onPress={props.onpress}>
          <Text style={{ fontSize: 15 }}>{props.user}</Text>
        </TouchableOpacity>
        <Text style={{ paddingLeft: 100 }}>{`${props.likes} people likes this post.`}</Text>
      </View>
      <Image style={{ width: '100%', height: 300 }} source={{ uri: props.imageURL }}/>
      <Text style={styles.statusText}>{`"${props.statusText}"`}</Text>
      {props.comments.length === 0 ? <Text>This post has no comments.</Text> : props.comments.map(comment =>
        <Comment text={comment.text} user={comment.user} />
      )}
    </View>
  );
}

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;
export default Post;
