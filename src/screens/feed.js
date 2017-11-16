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

    this.onPressProfile = this.onPressProfile.bind(this);
  }

  onPressProfile(user) {
    this.props.navigation.navigate('Profile', { user: user })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {posts.map((post) =>
          <Post
            key={post.user}
            user={post.user}
            statusText={post.statusText}
            imageURL={post.imageURL}
            likes={post.likes}
            comments={post.comments}
            onpress={() => this.onPressProfile(post.user)}
          />
        )}
      </ScrollView>
    );
  }
}

Feed.propTypes = propTypes;
Feed.defaultProps = defaultProps;

export default Feed;
