let React = require('react-native');
let NearbyMap = require('./NearbyMap');
let NearbyList = require('./NearbyList');
let {Parse} = require('parse/react-native');

let {
    View,
    Text,
    StyleSheet,
    ScrollView,
    MapView,
    Navigator
} = React;

class Home extends React.Component {

    constructor(props) {
        super(props);

        let Event = Parse.Object.extend('Event');
        let query = new Parse.Query(Event);

        this.state = { events: [] };

        query.find({
            success: (results) => this.setState({ events: results }),
            error: () => alert('Could not find any events nearby')
        });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                <NearbyList events={this.state.events} navigator={this.props.navigator} />
            </ScrollView>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'column',
        height: 6000
    },
    map: {
        flex: 1
    },
    block: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    }
});

module.exports = Home;
