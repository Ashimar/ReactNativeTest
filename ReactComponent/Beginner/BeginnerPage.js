import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  ListView,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import TimerPage from './TimerPage.js' // 计时器
import PicturePage from './PicturePage.js' // 图片
import ColorPage from './ColorPage.js' // 颜色
import TouchablePage from './TouchablePage.js'  // 点击事件
import AnimationPage from './AnimationPage.js'  // 动画
import DirectManipulation from './DirectManipulation.js' //

var ScreenWidth = Dimensions.get('window').width;
// 使用Component的好处是, 可以自动生成注释
// export命令用于用户自定义模块，规定对外接口；
export default class BeginnerPage extends Component {
  // 初始化
  constructor(props) {
    super (props);
    const ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this._genRows()),
    };
  }
  /*
  *  数据源
  */
  _genRows(){
    const dataBlob = ['颜色','图片','处理触摸','动画','无障碍功能','定时器','直接操作','调试','自动化测试' ,'JavaScript 环境','性能','升级','特定平台代码','手势响应系统'];
    return dataBlob;
  }
  // 绘制 row
  _renderRow(rowData, section, rowID) {
    return (
      <TouchableHighlight underlayColor = "rgb(210, 230,255)" onPress = {() => this._pressRow(rowID)} style={{height:ScreenWidth/4,width:ScreenWidth/4}}>
        <View style={styles.rowView}>
          <Text style={styles.rowText}>{rowData}</Text>
        </View>
      </TouchableHighlight>
    );
  }
  // 点击响应事件
  _pressRow(rowID) {
    console.log("~~~~~~"+rowID);
    switch (rowID) {  // rowID 是string 类型
      case '0':
        this.gotoNext(ColorPage);
        break;

      case '1':       // 1 是 int 类型， 加上''就是 string 类型
        this.gotoNext(PicturePage);
        break;

      case '2':
        this.gotoNext(TouchablePage);
        break;

      case '3':
        this.gotoNext(AnimationPage);
        break;


      case '5':
        this.gotoNext(TimerPage);
        break;
      case '6':
        this.gotoNext(DirectManipulation);
        break;
      default:

    }
  }

// 跳转
  gotoNext(name, type = 'Normal') {
    this.props.navigator.push({
      component:name,
      passProps:{
        id: name,
      },
      onPress:this.onPress,
      // rightText:
      type:type
    })
  }

  render() {

    // 点击按钮使用Home页面入栈
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listView}
          //  = {true}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />
    </View>
    );
  }
}
var styles = StyleSheet.create({
  // 页面框架
  container: {
    flex: 1,
    marginTop: 64,
    // flexDirection: 'row',
    backgroundColor: 'white',
  },
  rowView:{
    // justifyContent: 'center',
    padding: 5,
    margin: 3,
    flex:1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  rowText: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold'
  },
  listView: {
    // marginTop:64,
    flex:1,
    // justifyContent: 'space-around',
    flexDirection: 'row',
    // backgroundColor: 'red',
    flexWrap:'wrap'
  },
});
