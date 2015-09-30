'use strict';
let { AppRegistry } = require('react-native');
let Main = require('./components/Main');

let Parse = require('parse/react-native').Parse;

Parse.initialize('Jyo0lwRrIQt8pIeuNPWNKwUwH8diQ7LCUf3FNur3', 'lNYkKH7okkALImFVG9xq7s4fE4GSe9dEyCBJN9UR');

AppRegistry.registerComponent('stuffnearme', () => Main);
