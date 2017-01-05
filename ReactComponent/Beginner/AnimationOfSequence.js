import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native'

const arr = []

for (var i = 0; i < 100; i++) {

  arr.push(i)

}
// 和 Animated.parallel() 一样， Animated.sequence() 接受一个动画数组。
// 但不同的是，Animated.sequence() 是按顺序执行一个动画数组里的动画，等待一个完成后再执行下一个。
export default class AnimationOfSequence extends Component {
  constructor () {

    super()

    this.animatedValue = []

    arr.forEach((value) => {

      this.animatedValue[value] = new Animated.Value(0)

    })

  }

  componentDidMount () {

    this.animate()

  }

  animate () {

    const animations = arr.map((item) => {

      return Animated.timing(

        this.animatedValue[item],

        {

          toValue: 1,

          duration: 50

        }

      )

    })

    Animated.sequence(animations).start()

  }

  render () {

    const animations = arr.map((a, i) => {

      return <Animated.View key={i} style={{opacity: this.animatedValue[a], height: 20, width: 20, backgroundColor: 'red', marginLeft: 3, marginTop: 3}} />

    })

    return (

      <View style={styles.container}>

        {animations}

      </View>

    )

  }

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    flexDirection: 'row',

    flexWrap: 'wrap',

    height:200,

    backgroundColor:'green'

  }

})
