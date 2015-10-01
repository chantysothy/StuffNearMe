let React = require('react-native');
let moment = require('moment');
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

        let startDate = moment(this.props.start).format('lll');

        let coverColor = [styles.coverFee];

        if(Number(this.props.cover) > 0) {
            coverColor.push(styles.coverFeeNotFree);
        }
        else {
            coverColor.push(styles.coverFeeFree);
        }

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image style={styles.eventAvatar} source={{ uri: 'https://unsplash.it/300/350/' }} />

                    <View style={styles.main}>
                        <Text style={styles.eventDate}>{startDate}</Text>
                        <Text style={styles.eventName}>{this.props.name}</Text>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.location}>
                        <Text style={styles.locationLabel}>where</Text>
                        <Text style={styles.locationText}>{this.props.locationName}</Text>
                        <Text style={styles.locationAddress}>{this.props.address} {this.props.city}, {this.props.state} {this.props.postalCode}</Text>
                        <Text style={styles.locationDistance}>300 feet away</Text>
                    </View>
                    <View style={coverColor}>
                        <Text style={styles.coverFeeText}>
                            ${Number(this.props.cover) === 0 ? 'FREE' : this.props.cover}
                        </Text>
                    </View>
                </View>

                <MapView style={{ flex: 2.5 }} region={{ latitude: this.props.geolocation.latitude, longitude: this.props.geolocation.longitude, latitudeDelta: 0.001, longitudeDelta: 0.001 }} />
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
