let React = require('react-native');
let Home = require('./Home');
let {Parse} = require('parse/react-native');

Parse.initialize('Jyo0lwRrIQt8pIeuNPWNKwUwH8diQ7LCUf3FNur3', 'lNYkKH7okkALImFVG9xq7s4fE4GSe9dEyCBJN9UR');

let {
    View,
    Text,
    StyleSheet,
    ScrollView,
    MapView,
    NavigatorIOS
} = React;

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavigatorIOS
                style={{ flex: 1 }}
                translucent={false}
                titleTextColor='#FF1744'
                barTintColor='#f0f0f0'
                initialRoute={{
                    title: 'Nearby',
                    component: Home
                }}
            />
        );
    }
}
module.exports = Main;
