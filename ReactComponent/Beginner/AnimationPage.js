import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Animated,   // 创建动画的库
  Easing,
  ScrollView,
  Button,
} from 'react-native';

import AnimationOfparallel from './AnimationOfparallel.js'
import AboutEasingPage from './AboutEasingPage.js'  // 跳转到easing 界面
import AnimationOfSequence from './AnimationOfSequence.js'
import AnimationOfStagger from './AnimationOfStagger.js'

var Dimensions = require('Dimensions');
var ScreenHeight = Dimensions.get('window').height;
var ScreenWidth = Dimensions.get('window').width;

export default class AnimationPage extends Component {

  constructor(props) {
    super(props);

    // 使用 Animated.Value 声明了一个 spinValue 变量，并传了一个 0 作为初始值。
    this.spinValue = new Animated.Value(0)
    this.decayValue = new Animated.Value(0)   // 声明一个 decay 变量
    this.springValue = new Animated.Value(0)
    this.state = {
      fadeAnim: new Animated.Value(0),  // INIT opacity 0
    };
  }

  componentDidMount() {
    this.fadeAnimView();
    this.spin();
    this.decayfuc();
    this.springfuc();
  }
  // 上升动画
  fadeAnimView(){
    Animated.timing ( // Uses easing functions
      this.state.fadeAnim,  // The value to drive
      {
        toValue:1,
        duration:2000,
      },          // Configuration
    ).start();               // Don't forget start!
  }
  // 旋转动画
  spin (){
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue:1,
        duration:4000,
        easing:Easing.linear
      }
    ).start( () => this.spin())
  }

  decayfuc (){
    this.decayValue.setValue(0)
    Animated.decay(
      this.decayValue,
      {
        velocity:1,
        // decelerarion:0,
        duration:2000,
      }
    ).start( () => this.decayfuc() )
  }
  // 弹簧动画
  springfuc (){
    this.springValue.setValue(0)
    Animated.spring (this.springValue,
      {
        toValue:1,
        friction:1, //  摩擦力，默认为7.
        tension: 50, // 张力，默认40。
      }
    ).start( () => this.springfuc())
  }
  // 跳转
  buttonAction() {
    this.props.navigator.push({
      component:AboutEasingPage,
      title: '关于Easing',
      passProps:{
        id: AboutEasingPage,
      },
      type:'Normal',
    })
  }

  render() {

    const spin = this.spinValue.interpolate({
      inputRange:[0,1],
      outputRange:['0deg', '360deg']
    })

    const transform_x = this.springValue.interpolate({
      inputRange:[0, 0.5, 1],
      outputRange:[100, 150, 100],
    })

    return (
        <Animated.View    // Special animatable View
          style={{opacity: this.state.fadeAnim, // Binds directly
                   transform: [{
                     translateY: this.state.fadeAnim.interpolate({
                       inputRange: [0, 1],
                       outputRange: [ScreenHeight, 0]  // 0 : 150, 0.5 : 75, 1 : 0
                     }),
                   }],
                   height:100,
                   marginTop:64,
                   flex:1,
                }} // binds
          >
            <ScrollView>
            <Text>1、Animated.timing 创建的旋转动画</Text>
            <Text> 同时开始一个动画数组里的全部动画。默认情况下，如果有任何一个动画停止了，其余的也会被停止。你可以通过stopTogether 选项来改变这个效果。</Text>
            <Animated.Image
              style={{
                width: 227/2,
                height: 200/2,
                transform: [{rotate: spin}],  // 旋转
              }}
                source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
            />
            <Button
              onPress = {()=>this.buttonAction()}
              title = "About Easing"
              color = "#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Text>2、Animated.decay 这不会</Text>

            <Text>3、Animated.spring()</Text>
            <Text>推动一个值以一个初始的速度和一个衰减系数逐渐变为0。</Text>
            <Animated.View
                style = {{
                  width: 50,
                  height: 50,
                  transform:[{translateX: transform_x}],
                  backgroundColor:'green',
                  alignItems:'center',
                }}
              >
            </Animated.View>

            <Text>4. Animated.parallel()</Text>
            <Text>Animated.parallel() 会同时开始一个动画数组里的全部动画。</Text>
            <View
              style = {{height:600}}
            >
              <AnimationOfparallel/>

              <AnimationOfSequence style={{height:200,marginTop:50}} />
              <AnimationOfStagger />
            </View>

            </ScrollView>
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
