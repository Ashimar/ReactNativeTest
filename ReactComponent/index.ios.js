/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
    AppRegistry,
 } from 'react-native';

var HomePage = require('./HomePage.js');

//  项目名要有所对应
AppRegistry.registerComponent('ReactNativeTest', () => HomePage);
