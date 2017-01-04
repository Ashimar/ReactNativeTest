import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  Dimensions,
} from 'react-native';
const urlStr = "source={{uri:'1'}}";

var ScreenWidth = Dimensions.get('window').width;


export default class PicturePage extends Component {
  // 初始化
  // constructor() {
  //
  // }

  render (){

    return(
      <ScrollView style = {styles.scrollView}>
        <Text style = {styles.headText}>1,静态图片资源</Text>
        {/* 为了使新的图片资源机制正常工作，require中的图片名字必须是一个静态字符串。 */}
        <Text>{"source={require('./img/picturePage_1.png')}"}</Text>
        <Image source={require('./img/picturePage_1.png')} style={styles.staticImage}/>

        <Text style = {styles.headText}>2,xcode项目中的图片</Text>
        <Text >{urlStr}</Text>
        <Image source={{uri:'segment_1'}} style={{height:100,width:200,backgroundColor:'red'}} />

        <Text style = {styles.headText}>3,网络图片</Text>
        <Text>很多要在App中显示的图片并不能在编译的时候获得，又或者有时候需要动态载入来减少打包后的二进制文件的大小。这些时候，与静态资源不同的是，你需要手动指定图片的尺寸{"source = {{uri:'http://....}}"}</Text>
        <Image source = {{uri:'https://facebook.github.io/react/img/logo_og.png'}} style={styles.netImage}></Image>

        <Text style = {styles.headText}>4.资源属性是一个对象（object）</Text>
        <Text>{"在React Native中，另一个值得一提的变动是我们把src属性改为了source属性，而且并不接受字符串，正确的值是一个带有uri属性的对象。<Image source={{uri: 'something.jpg'}} />"}</Text>

        <Text style = {styles.headText}>5.通过嵌套来实现背景图片</Text>
        <Image source={{uri:'http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/01/52/ca3a02829782751f2b8b20d76c70ac5c.jpg'}} style = {{height:100,width:ScreenWidth}}>
          <Text style = {{width:ScreenWidth,height:100,}}>Inside</Text>
        </Image>
      </ScrollView>
    );
  }
}

// 自定义样式
const styles = StyleSheet.create({
  scrollView :{
    marginTop: 64,
    flex: 1,
  },
  staticImage: {
    margin: 5,
    width: 80,
    height: 80,
    backgroundColor: 'green',
  },
  headText: {
    fontSize: 20,
  },
  netImage: {
    backgroundColor:'blue',
    width: 100,
    height: 100,
  },
});
