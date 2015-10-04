let React = require('react-native');
let NearbyMap = require('./NearbyMap');
let NearbyList = require('./NearbyList');
let {Parse} = require('parse/react-native');
let Event = require('./../models/Event');
let moment = require('moment-timezone');
let {
    View,
    Text,
    StyleSheet,
    ScrollView,
    MapView,
    Navigator,
    ActivityIndicatorIOS
} = React;

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { events: [], latitude: 27.9624425, longitude: -82.4392324, loading: true, hasReset: true };
        // navigator.geolocation.getCurrentPosition(
        //     (position) => this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude }),
        //     () => alert('Failed to get your location'),
        //     { timeout: 20000 }
        // );

        this.loadData();
    }

    loadData() {
        let eventQuery = new Parse.Query(Event);
        let currentGeoPoint = new Parse.GeoPoint(this.state.latitude, this.state.longitude);

        eventQuery.withinMiles('location', currentGeoPoint, 30);
        eventQuery.greaterThan('end', new Date());

        eventQuery.find({
            success: (results) => this.setState({ events: results, loading: false }),
            error: (err) => alert(JSON.stringify(err))
        });
    }

    handleScroll(e) {
        console.log(e.nativeEvent.contentOffset.y);
        if (e.nativeEvent.contentOffset.y > -50 && !this.state.loading) {
            this.setState({ hasReset: false });
            this.loadData();
        }
    }

    render() {

        let listLoaderIcon = this.state.loading ? <ActivityIndicatorIOS size='large' style={styles.loader} /> : null;

        return (
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} style={{flex: 1}} onScroll={this.handleScroll.bind(this)} scrollEventThrottle={200}>
                <NearbyList events={this.state.events} navigator={this.props.navigator} latitude={this.state.latitude} longitude={this.state.longitude} />
                {listLoaderIcon}
            </ScrollView>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'column',
        height: 6000,
        backgroundColor: '#ECEFF1'
    },
    map: {
        flex: 1
    },
    block: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    loader: {
        flex: 1,
        alignSelf: 'center'
    }
});

module.exports = Home;
