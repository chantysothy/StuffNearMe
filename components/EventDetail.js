let React = require('react-native');
let moment = require('moment-timezone');
let {
    View,
    Text,
    Image,
    MapView,
    TouchableHighlight
} = React;


class EventDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let coverColor = [styles.coverFee];
        let event = this.props.eventModel;

        if(Number(event.get('cover')) > 0) {
            coverColor.push(styles.coverFeeNotFree);
        }
        else {
            coverColor.push(styles.coverFeeFree);
        }

        let fromTime = moment(event.get('start'));
        let toTime = moment(event.get('end'));

        let now = moment.tz('GMT');

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image style={styles.eventAvatar} source={{ uri: 'https://unsplash.it/300/350/' }} />

                    <View style={styles.main}>
                        <Text style={styles.eventDate}>
                            {fromTime < now ? 'now until ' : fromTime.format('h:mm A') + ' to '}
                            {toTime.format('h:mm A')}
                        </Text>
                        <Text style={styles.eventName}>{event.get('name')}</Text>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.location}>
                        <Text style={styles.locationLabel}>where</Text>
                        <Text style={styles.locationText}>{event.get('location_name')}</Text>
                        <Text style={styles.locationAddress}>{event.get('address')} {event.get('city')}, {event.get('state')} {event.get('postal_code')}</Text>
                        <Text style={styles.locationDistance}>{Math.round(event.get('distance') * 10) / 10} miles away</Text>
                    </View>
                    <View style={coverColor}>
                        <Text style={styles.coverFeeText}>
                            {Number(event.get('cover')) === 0 ? 'FREE' : '$' + event.get('cover')}
                        </Text>
                    </View>
                </View>

                <MapView style={{ flex: 2.5 }} region={{ latitude: event.get('location').latitude, longitude: event.get('location').longitude, latitudeDelta: 0.0005, longitudeDelta: 0.0005 }} />
            </View>
        );
    }
}

let styles = React.StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    eventAvatar: {
        flex: 1
    },
    main: {
        flex: 1,
        padding: 20
    },
    eventDate: {
        fontSize: 16,
        color:'#AAAAAA'
    },
    eventName: {
        color:'#212121',
        fontWeight: '300',
        fontSize: 30
    },
    location: {
        flex: 1.2,
        backgroundColor: '#f0f0f0',
        padding: 10,
        paddingLeft: 25
    },
    locationLabel: {
        color: '#c4c4c4',
        fontWeight: '900',
    },
    locationText: {
        color: '#666',
        fontWeight: '600',
        fontSize: 18
    },
    locationAddress: {
        color: '#b4b4b4',
        fontSize: 14
    },
    locationDistance: {
        color:'#666',
        fontWeight: '800',
        fontSize: 16,
        marginTop: 10
    },
    coverFee: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    coverFeeFree: {
        backgroundColor: '#00E676'
    },
    coverFeeNotFree: {
        backgroundColor: '#FF5252'
    },
    coverFeeText: {
        color: '#FFF',
        fontWeight: '900',
        fontSize: 26
    },
    description: {
        flex: 1,
        padding: 25,
        color:'#333'
    },
    willBeThereButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    willBeThereText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '700',
        backgroundColor: '#FFAB40',
        alignSelf: 'center'
    }
});

module.exports = EventDetail;
