let React = require('react-native');
let Home = require('./Home');
let {Parse} = require('parse/react-native');

let Event = Parse.Object.extend('event');
let query = new Parse.Query(Event);

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
        this.state = { events: {} };

        query.find({
            success: (results) => this.setState({ events: results }),
            error: () => alert('Could not find any events nearby')
        });
    }

    render() {
        return (
            <NavigatorIOS
                style={{ flex: 1 }}
                translucent={false}
                titleTextColor='#7C4DFF'
                barTintColor='#f0f0f0'
                initialRoute={{
                    title: 'Nearby',
                    component: Home,
                    passProps: { events: this.state.events }
                }}
            />
        );
    }
}
module.exports = Main;
