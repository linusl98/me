import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import { users } from '../sample-data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  top: {
    flexDirection: 'row',
  },
});

const propTypes = {};
const defaultProps = {};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  componentWillMount() {
    this.setState({
      user: users.filter(user => user.user === this.props.navigation.state.params.user),
    })
  }

  render() {
    console.log(this.state.user);

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image style={{ width: '50%', height: 200 }} source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ paddingBottom: 10 }}>{`Followers ${this.state.user[0].followerCount}`}</Text>
              <Text style={{ textAlign: 'center' }}>{`Following ${this.state.user[0].followingCount}`}</Text>
            </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          {this.state.user[0].posts.map(post =>
            <Image key={post.user} style={{ width: '33%', height: 150, marginRight: 5 }} source={{ uri: post.imageURL }} />
          )}
        </View>
      </View>
    );
  }
}

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;
