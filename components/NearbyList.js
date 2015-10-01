let React = require('react-native');
let NearbyListItem = require('./NearbyListItem');
let {
    View,
    Text,
    StyleSheet,
    ListView,
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
                <Text style={styles.nearbyHeader}>NEARBY EVENTS (1 mile)</Text>
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
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color:'#0091EA'
    }
});

module.exports = NearbyList;
