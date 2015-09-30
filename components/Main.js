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
                ref="nav"
                navigationBarHidden={true}
                title="Nearby"
                initialRoute={{
                    component: Home
                }}
            />
        );
    }
}
module.exports = Main;
