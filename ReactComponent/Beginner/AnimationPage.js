import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

// var rebound = require('rebound');
// var precomputeStyle = require('precomputeStyle');
export default class AnimationPage extends Component {
  // componentWillMount() {
  //   // Initialize the spring that will drive animations
  //   this.springSystem = new rebound.SpringSystem();
  //   this._scrollSpring = this.springSystem.createSpring();
  //   var springConfig = this._scrollSpring.getSpringConfig();
  //   springConfig.tension = 240;
  //   springConfig.friction = 10;
  //
  //   this._scrollSpring.addListener({
  //     onSpringUpdate: () => {
  // 			if (!this._photo) { return }
  //       var v = this._scrollSpring.getCurrentValue();
  // 			var newProps = precomputeStyle({transform: [{scaleX: v}, {scaleY: v}]});
  //       this._photo.setNativeProps(newProps);
  //     },
  //   });

    // this._scrollSpring.setCurrentValue(1);
  // }

  // _onPressIn() {
	// 	this._scrollSpring.setEndValue(0.5);
  // }
  //
  // _onPressOut() {
	// 	this._scrollSpring.setEndValue(1);
  // }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPressIn={this._onPressIn} onPressOut={this._onPressOut}>
          <Image ref={component => this._photo = component}
      					 source={{uri: 'http://url.brentvatne.ca/1gO2n.png'}}
      					 style={{width: 250, height: 200}} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

// Photo credit:
// http://www.flickr.com/photos/95142644@N00/2264510346 - https://creativecommons.org/licenses/by/2.0/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
