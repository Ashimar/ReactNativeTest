import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  li
} from 'react-native';

export default class ColorPage extends Component {

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>以下这些格式的颜色代码都是支持的：</Text>
        <Text style={styles.text}>'#f0f' (#rgb)</Text>
        <Text style={styles.text}>'#f0fc' (#rgba)</Text>
        <Text style={styles.text}>'#f0fc' (#rgba)</Text>
        <Text style={styles.text}>'#ff00ff' (#rrggbb)</Text>
        <Text style={styles.text}>'#ff00ff00' (#rrggbbaa)</Text>
        <Text style={styles.text}>'rgb(255, 255, 255)'</Text>
        <Text style={styles.text}>'rgba(255, 255, 255, 1.0)'</Text>
        <Text style={styles.text}>'hsl(360, 100%, 100%)'</Text>
        <Text style={styles.text}>'hsla(360, 100%, 100%, 1.0)'</Text>
        <Text style={styles.text}>'transparent'</Text>
        <Text style={styles.text}>'red'</Text>
        <Text style={styles.text}>0xff00ff00 (0xrrggbbaa)</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop:64,
  },
  text: {
    paddingLeft: 10,
    height:40,
    // textAlign:'center',
  },
});
