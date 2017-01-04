import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

export default class AnimationPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),  // INIT opacity 0
    };
  }

  componentDidMount() {
    Animated.timing ( // Uses easing functions
      this.state.fadeAnim,  // The value to drive
      {toValue:1},          // Configuration
    ).start();               // Don't forget start!
  }

  render() {
    return (
      <Animated.View    // Special animatable View
        style={{opacity: this.state.fadeAnim, // Binds directly
                 transform: [{
                   translateY: this.state.fadeAnim.interpolate({
                     inputRange: [0, 1],
                     outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
                   }),
                 }],
                 backgroundColor:'orange',
                 height:100,
                 marginTop:64.
              }} // binds
        >
          {this.props.children}
        </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
