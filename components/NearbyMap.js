let React = require('react-native');

let {
    View,
    Text,
    StyleSheet,
    ScrollView,
    MapView
} = React;

class NearbyMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
            },
            annotations: props.annotations
        }

        navigator.geolocation.getCurrentPosition(
            pos => {
                let newRegion = {
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                };

                this.setState({ region: newRegion });
            },
            err => console.log(err),
            { timeout: 20000 }
        );
    }

    render() {
        return (
            <View>
                <Text style={styles.nearbyHeader}>TO GET A BETTER IDEA</Text>
                <MapView
                    region={this.state.region}
                    style={styles.map}
                    zoomEnabled={false} />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    mapContainer: {
        flex: 1
    },
    map: {
        flex: 1,
    },
    block: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    nearbyHeader: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 10,
        color:'#69F0AE'
    }
});

module.exports = NearbyMap;
