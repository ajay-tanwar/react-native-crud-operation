import React, { Component } from 'react';
import styles from "./styles"
import {
  Text,
  View
} from 'react-native';

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          About Page
        </Text>
      </View>
    );
  }
}