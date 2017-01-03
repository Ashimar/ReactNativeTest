import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  ListView
} from 'react-native';
// import命令用于输入其他模块提供的功能，同时创造命名空间（namespace），防止函数名冲突。
import SecondPage from "./SecondPage";
import BeginnerPage from "./Beginner/BeginnerPage";

// 使用Component的好处是, 可以自动生成注释
// export命令用于用户自定义模块，规定对外接口；
export default class FirstPage extends Component {
  // 初始化模拟数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
    this.state = {
      // 更新datasource中的数据，请（每次都重新）调用cloneWithRows方法
      //（如果用到了section，则对应cloneWithRowsAndSections方法）。
      dataSource: ds.cloneWithRows(this._genRows()),
    };
  }

  _genRows(){
    const dataBlob = ['进阶指南','使用指南(iOS)'];
    return dataBlob;
  }

  _renderRow(rowData, section, rowID) {
    return (
      <TouchableHighlight onPress = {() => this._pressRow(rowID)}>
        <View>
          <Text style={styles.rowText}>{rowData}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  // 点击响应事件
  _pressRow(rowID) {
    // alert("hellow"+rowID);
      console.log("~~~~~~~~~~~~~~"+rowID);
      if (rowID == 0) {
        this.gotoNext(BeginnerPage,'Modal');
      } else if (rowID == 1) {
        // this.gotoNext();
        alert("Hey!this 功能暂未开通 😆");
      }
    // switch ({rowID}) {
    //   case 0:
    //
    //     break;
    //   default:
    //
    // }
  }
  // 填出提示框
  onPress() {
    alert("我是haha!");
  }

  /**
   * 跳转页面至
   * @param name 传递参数
   * @param type 动画类型
   */
  gotoNext(name, type = 'Normal') {
    console.log("跳转");
    this.props.navigator.push({
      component:name,             // 跳转到对应的name 的界面
      passProps: {
        id: name,
      },
      onPress: this.onPress,
      rightText: '点我!',
      type: type
    })
  }

  render() {
    // 点击按钮使用Home页面入栈
    return (
      <View style={styles.container}>
        <ListView
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
    flex: 4,
    marginTop: 64,
    flexDirection: 'column',
    backgroundColor: 'skyblue'
  },

  // 按钮
  button: {
    height: 60,
    marginTop: 10,
    justifyContent: 'center', // 内容居中显示
    backgroundColor: '#ff1049',
    alignItems: 'center'
  },
  // 按钮文字
  buttonText: {
    fontSize: 18,
    color: '#ffffff'
  },
  // 左面导航按钮
  leftNavButtonText: {
    color: '#ffffff',
    fontSize: 18,
    marginLeft: 13
  },
  // 右面导航按钮
  rightNavButtonText: {
    color: '#ffffff',
    fontSize: 18,
    marginRight: 13
  },
  // 标题
  title: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    flex: 1                //Step 3
  },

  rowText: {
    marginTop: 1,
    backgroundColor: 'white',
    height: 44,
    // alignItems: 'center',
    // textAlign: 'left',
    // textAlignVertical: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    fontSize: 20
  },
});

// module.exports = FirstPage; // 导出模块
