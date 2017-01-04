import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Animated,
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

export default class TimerRollPage extends Component {

	constructor(props){
	    super(props);
			this.move_y = new Animated.Value(1);
			this.opacity_view = new Animated.Value(1);

		console.log("初始化方法");
	}

	componentDidMount () {
		// 开启定时器，每秒走 方法
		// this.interval = setInterval(() => {this.updateFrame()},1000);
		this.animate()
	}

	componentWillUnmount (){
		console.log("将要离开");
		// this.interval && clearInterval(this.interval);	// 清除计时器

	}

	animate () {
		console.log("开始动画");
		this.opacity_view.setValue(1);
		this.move_y.setValue(1);
		Animated.parallel([            // 同时执行动画
			Animated.timing(this.opacity_view,{
				toValue:0,
				duration: 1000,
			}),
			Animated.timing(this.move_y,{
				toValue:0,
				duration: 1000,
			}),
		]).start(()=>this.animate())
}

	render (){

		const moveY = this.move_y.interpolate({
			inputRange:[0,1],
			outputRange:[-8,6]
		})
		const alpha = this.opacity_view.interpolate({
			inputRange:[0,0.5,1],
			outputRange:[0,1,0],
		})

		return (

			<View style = {styles.container} >

				<Image
					source = {{uri: 'http://cdn1.raywenderlich.com/wp-content/uploads/2015/03/logo.png'}}
					style = {{width: ScreenWidth/6, height: ScreenWidth/6}} />

				<Animated.View

					style = {{
						opacity: alpha,
						height: ScreenWidth/6,
						justifyContent: 'space-around',
						transform: [
							{translateY:moveY},
						]
					}}>
					<Text
						numberOfLines={1}

					>"哈哈你这逗逼"</Text>
					<Text
						numberOfLines={1}
						>"我是一个很长的文本，so long ,so long ,so long, so long, so long~"</Text>
				</Animated.View>
			</View>


		);
	}

}

const styles = StyleSheet.create({
	container: {
		// flex:1,
		flexDirection: 'row',
		// backgroundColor:'red',
		height: ScreenWidth/6,
	},

	text: {
		fontSize: 20,
	},
});
