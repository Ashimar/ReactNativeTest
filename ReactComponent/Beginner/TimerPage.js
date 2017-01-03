import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  ListView,
  TouchableHighlight,

} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var count = 0;
var isStart = 0;   // 用于判断计时器是否开启
// export命令用于用户自定义模块，规定对外接口；
export default class TimerPage extends Component {
  // 初始化
  constructor(props){
    super(props);
    this.state = {
      content:' ',
      msg:' ',
      sum:0,
    };
    navigator.title = "Timer 计时器";
  }
  componentDidMount(){
    this.timer = setTimeout(
      () => {
        this.setState({content:"把定时器的引用挂在this上。"})
      },
      500
    );
    this.timer_two = setTimeout(
      () => {
        this.setState({msg:"我是定时器打印的内容。。two"})
      },
      1000
    );
  }
  componentWillUnmount() {
    console.log("将要离开");
    this.interval && clearInterval(this.interval);


    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearTimeout(this.timer);
    this.timer_two && clearTimeout(this.timer_two);

  }
  /**
   * 开始计时
   */
  timerStart() {

    if (isStart == 0) { // 判断当前的timer 是否在计时中，是则不再开始，

      this.interval = setInterval(() => {this.setState({sum:(this.state.sum+1)});
        },400);

      console.log("开始");

      isStart = 1;
    }
  }

  timerStop (){
    console.log("停止");

    this.interval && clearInterval(this.interval);  // 清除计时器

    isStart = 0;
  }

  render() {
    count = 0;
    // 点击按钮使用Home页面入栈
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>定时器实例</Text>
        <Text>{this.state.content}</Text>
        <Text>{this.state.msg}</Text>

        <Text style={styles.timerText}>计时器计数：{this.state.sum}</Text>

        <View style={styles.timerView}>
          <TouchableHighlight
            onPress = {()=>this.timerStart()}
            underlayColor="rgb(210, 230,255)"
          >
            <Text style={styles.btnText}> 测试setInterval </Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={()=>this.timerStop()}
            underlayColor="rgb(210, 230,255)"
          >
            <Text style={styles.btnText}> clearInterval </Text>
          </TouchableHighlight>

        </View>

      </View>
    );
  }
}
var styles = StyleSheet.create({
  // 页面框架
  container: {
    flex: 1,
    marginTop: 64,
  },
  welcome: {
    fontSize:26,
    textAlign: 'center',
  },
  timerText:{
    fontSize:24,
    textAlign: 'center',
    color: 'pink',
    backgroundColor: 'skyblue',
    height:40,
    paddingTop:5,
  },
  timerView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    backgroundColor: 'skyblue',
  },
  btnText:{
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    width: ScreenWidth/2-4,
    height:30,
    textAlign: 'center',
    paddingTop: 5,
  },
});
