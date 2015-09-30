let React = require('react-native');
let NearbyMap = require('./NearbyMap');
let NearbyList = require('./NearbyList');
let eventData = require('./../data/events');
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

        let mockRegion = { longitude: -82.2, latitude: 28.0, longitudeDelta: 0.01, latitudeDelta: 0.01 };

        this.state = eventData;
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                <NearbyList nearbyEvents={this.state.events} navigator={this.props.navigator} />
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
