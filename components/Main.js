let React = require('react-native');
let Home = require('./Home');

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
                titleTextColor={'#7C4DFF'}
                barTintColor={'#f0f0f0'}
                initialRoute={{
                    title: 'Nearby',
                    component: Home
                }}
            />
        );
    }
}
module.exports = Main;
