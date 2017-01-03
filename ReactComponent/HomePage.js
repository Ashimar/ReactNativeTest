import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

// // 使用Component的好处是, 可以自动生成注释
// class FirstPage extends Component {
//   // 填出提示框
//   onPress() {
//     alert("我是Spike!");
//   }
//
//   /**
//    * 跳转页面至SecondPage
//    * @param name 传递参数
//    * @param type 动画类型
//    */
//   gotoNext(name, type = 'Normal') {
//     this.props.navigator.push({
//       component: SecondPage,
//       passProps: {
//         id: name
//       },
//       onPress: this.onPress,
//       rightText: 'ALERT!',
//       type: type
//     })
//   }
//
//   render() {
//     // 点击按钮使用Home页面入栈
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={()=>this.gotoNext('第一页')}>
//           <Text style={styles.buttonText}>
//             {'跳转至第二页(右出)'}
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={()=>this.gotoNext('第一页', 'Modal')}>
//           <Text style={styles.buttonText}>
//             {'跳转至第二页(底部)'}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

/**
 * 第二页
 */
// class SecondPage extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={()=>this.props.navigator.pop()}>
//           <Text style={styles.buttonText}>
//             返回上一页, 来源: {this.props.id}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// 导航栏的Mapper
/*
  NavigationBarRouteMapper: 导航栏路由映射器, 设置左键LeftButton, 右键RightButton, 标题Title.
*/
var NavigationBarRouteMapper = {
  // 左键
  /*左键LeftButton: index属性表示当前页面的索引, 通过判断index属性,
  获知栈内是否有其他页面, 判断后退按钮是否显示. 点击调用navigator.pop()出栈.*/
  LeftButton(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <View style={styles.navContainer}>
          <TouchableHighlight
            underlayColor='transparent'
            onPress={() => {if (index > 0) {navigator.pop()}}}>
            <Text style={styles.leftNavButtonText}>
              后退
            </Text>
          </TouchableHighlight>
        </View>
      );
    } else {
      return null;
    }
  },
  // 右键
  RightButton(route, navigator, index, navState) {
    if (route.onPress)
      return (
        <View style={styles.navContainer}>
          <TouchableHighlight
            onPress={() => route.onPress()}>
            <Text style={styles.rightNavButtonText}>
              {route.rightText || '右键'}
            </Text>
          </TouchableHighlight>
        </View>
      );
  },
  // 标题
  Title(route, navigator, index, navState) {
    switch (index) {
      case 0:
        {
          return (
            <View style={styles.navContainer}>
              <Text style={styles.title}>
                第一页
              </Text>
            </View>
          );
        }
        break;
      case 1:
        {
          return (
            <View style={styles.navContainer}>
              <Text style={styles.title}>
                第二页
              </Text>
            </View>
          );
        }
        break;
      default:
    }
  }
};

// 主模块
class HomePage extends Component {
  /**
   * 使用动态页面加载
   * @param route 路由
   * @param navigator 导航器
   * @returns {XML} 页面
   */
  renderScene(route, navigator) {
    return <route.component navigator={navigator}  {...route.passProps} />;
  }

  configureScene(route, routeStack) {
    if (route.type == 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{name: 'FirstPage', component: FirstPage}}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navContainer}
            routeMapper={NavigationBarRouteMapper}/>}
        />
    );
  }
}

var styles = StyleSheet.create({
  // 页面框架
  container: {
    flex: 4,
    marginTop: 100,
    flexDirection: 'column'
  },
  // 导航栏
  navContainer: {
    backgroundColor: '#81c04d',
    paddingTop: 12,
    paddingBottom: 10,
  },
  // 导航栏文字
  headText: {
    color: '#ffffff',
    fontSize: 22
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
  }
});

module.exports = HomePage; // 导出模块
