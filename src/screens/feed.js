import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { posts } from '../sample-data';
import Post from '../components/post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

const propTypes = {};
const defaultProps = {};

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {posts.map((post) =>
          <Post
            user={post.user}
            statusText={post.statusText}
            imageURL={post.imageURL}
            likes={post.likes}
            comments={post.comments}
          />
        )}
      </ScrollView>
    );
  }
}

Feed.propTypes = propTypes;
Feed.defaultProps = defaultProps;

export default Feed;
