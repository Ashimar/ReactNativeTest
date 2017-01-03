import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  PanResponder,
} from 'react-native';

const urlStr = "source={{uri:'1'}}";

var ScreenWidth = Dimensions.get('window').width;


export default class TouchablePage extends Component {

  componentWillMount(){
    this._panResponder = PanResponder.create({
      // 要求成为响应者：
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！

        // gestureState.{x,y}0 现在会被设置为0
      },
      onPanResponderMove: (evt, gestureState) => {
        // 最近一次的移动距离为gestureState.move{X,Y}

        // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
        console.log(gestureState);
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
        // 一般来说这意味着一个手势操作已经成功完成。
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
        // 默认返回true。目前暂时只支持android。
        return true;
      },
    });
  }

  onPressButton() {
    alert("You tapped the button!");
  }

  onLongPressButton (){
    alert("You long tapped the button!");
  }

  onHideUnderlay(){
    alert("当底层的颜色被隐藏的时候调用。");
  }

  onShowUnderlay (){
    alert("当底层的颜色被显示的时候调用。");
  }
  render (){

    return(
      <View style = {styles.bgView}>
        <Text>在需要捕捉用户点击操作时，可以使用"Touchable"开头的一系列组件。这些组件通过onPress属性接受一个点击事件的处理函数。当一个点击操作开始并且终止于本组件时（即在本组件上按下手指并且抬起手指时也没有移开到组件外），此函数会被调用。</Text>
        <Text style = {styles.text}>1.单击 onPress</Text>
        <TouchableHighlight
          onPress = {()=>this.onPressButton()}
          activeOpacity = {0.5}
          underlayColor = 'red'
          style = {styles.touch}
        >
          <Text style = {styles.button}>单击按钮</Text>
        </TouchableHighlight>

        <Text style = {styles.text}>2.长按 onLongPress</Text>
        <TouchableHighlight
          onLongPress = {()=>this.onLongPressButton()}
          activeOpacity = {0.5}   // 指定封装的视图在被触摸操作激活时以多少不透明度显示（通常在0到1之间）。
          underlayColor = 'red'   // 有触摸操作时显示出来的底层的颜色。
          style = {styles.touch}
        >
          <Text
            ellipsizeMode = 'clip'
            numberOfLines = {1}
            style = {styles.button}>长按按钮</Text>
        </TouchableHighlight>

      </View>

    );
  }
}

// 自定义样式
const styles = StyleSheet.create({
  bgView: {
    marginTop: 64,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    height: 44,
    width: 100,
    color: 'white',
    backgroundColor: 'orange',
    fontSize:20,
    alignItems: 'center',
  },
  touch: {
    height: 44,
    width: 110,
  },
});
