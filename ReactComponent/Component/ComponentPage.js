import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

import PicturePlayerPage from './PicturePlayerPage';

// 屏幕宽度
var ScreenWidth = Dimensions.get('window').width;

export default class ComponentPage extends Component {
  constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this._genRows()),
    };
  }
  // 初始化数据源
  _genRows(){
    const dataBlob = ['图片轮播','指示器'];
    return dataBlob;
  }

  // 绘制 row
  _renderRow(rowData, section, rowID) {
    return (
      <TouchableHighlight underlayColor = "rgb(210, 230,255)" onPress = {() => this._pressRow(rowID)} style={{height:ScreenWidth/4,width:ScreenWidth/4}}>
        <View style = {styles.rowView}>
          <Text style = {styles.rowText}>{rowData}</Text>
        </View>
      </TouchableHighlight>
    );
  }
// 点击 cell
  _pressRow (rowID){
    switch (rowID) {
      case '0':
        this.gotoNext(PicturePlayerPage);
        break;
      default:

    }
  }

  gotoNext(name, type = 'Normal') {
    this.props.navigator.push({
      component:name,
      passProps:{
        id:name,
      },
      onPress:this.onPress,
      type:type
    })
  }

  render(){
    return (
      <View style = {styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          contentContainerStyle={styles.listView}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
