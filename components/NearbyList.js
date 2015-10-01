let React = require('react-native');
let NearbyListItem = require('./NearbyListItem');
let {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight
} = React;

class NearbyList extends React.Component {

    constructor(props) {
        super(props);
    }

    renderRow(data, index) {
        let event = data.attributes;
        return (<NearbyListItem
            key={index} name={event.name}
            description={event.description}
            region={event.region}
            type={event.type}
            address={event.address}
            start={event.start}
            locationName={event.location_name}
            city={event.city}
            state={event.state}
            postalCode={event.postal_code}
            cover={event.cover}
            geolocation={event.location}
            navigator={this.props.navigator} />);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={styles.nearbyHeader}>NEARBY EVENTS - TONIGHT</Text>
                <TouchableHighlight style={styles.radiusSetting}>
                    <Text>Radius: 0.5 miles</Text>
                </TouchableHighlight>
                {this.props.events.map(this.renderRow.bind(this))}
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'column'
    },
    nearbyHeader: {
        paddingTop: 20,
        paddingLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color:'#FF1744'
    },
    radiusSetting: {
        paddingLeft: 20,
        paddingBottom: 20,
        fontWeight: '900'
    }
});

module.exports = NearbyList;
