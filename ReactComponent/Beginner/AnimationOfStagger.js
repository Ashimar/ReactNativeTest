import React, { Component } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Text,
} from 'react-native';
/*
  和 Animated.parallel() 和 Animated.sequence() 一样， Animated.Stagger 接受一个动画数组。
  但不同的是，Animated.Stagger 里面的动画有可能会同时执行（重叠），不过会以指定的延迟来开始。
 */

const arr = []

for (var i = 0; i < 100; i++) {
  arr.push(i)
}

export default class AnimationOfStagger extends Component{
  constructor() {
    super()
    this.animatedValue = []
    arr.forEach((value) => {
      this.animatedValue[value] = new Animated.Value(0)
    })
  }

  componentDidMount (){
    this.animate()
  }

  animate(){
    const animates = arr.map((item) => {
      return Animated.timing(
        this.animatedValue[item],
        {
          toValue:1,
          duration:4000
        }
      )
    })
    Animated.stagger(10, animates).start()
  }

  render(){
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

          flexWrap: 'wrap'

        }

      })
