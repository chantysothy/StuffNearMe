var React = require('react-native');

var {
    View,
    Text,
    Image
} = React;


class EventDetail extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image style={styles.eventAvatar} source={{ uri: 'https://unsplash.it/300/350/' }} />

                    <View style={styles.main}>
                        <Text style={styles.eventDate}>25 Aug 2015, 09 AM</Text>
                        <Text style={styles.eventName}>Ladies drink for FREE!</Text>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.location}>
                        <Text style={styles.locationLabel}>where</Text>
                        <Text style={styles.locationText}>The Ampitheatre</Text>
                        <Text style={styles.locationAddress}>12345 Brisbane St. Tampa, FL 33635</Text>
                        <Text style={styles.locationDistance}>300 feet away</Text>
                    </View>
                    <View style={styles.coverFee}>
                        <Text style={styles.coverFeeText}>
                            FREE
                        </Text>
                    </View>
                </View>

                <View style={{ flex: 2.5, flexDirection: 'row', borderBottom: '1' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </View>
                </View>
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
        backgroundColor: '#00E676'
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
    }
});

module.exports = EventDetail;
