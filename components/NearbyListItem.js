let React = require('react-native');
let EventDetail = require('./EventDetail');
let moment = require('moment-timezone');
let {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight,
    Modal
} = React;

class NearbyListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { modalVisible: false };
    }

    onDetailPress(e) {
        this.props.navigator.push({
            component: EventDetail,
            passProps: { eventModel: this.props.eventModel }
        });
    }

    render() {

        let event = this.props.eventModel;
        let roundedDistance = Math.round(event.get('distance') * 10) / 10;
        let isHappeningNow = event.hasStarted() && !event.hasEnded() ? <Text style={styles.happeningNowText}>HAPPENING NOW!</Text> : null;
        let isHappeningSoon = event.isStartingSoon() ? <Text style={styles.startingSoonText}>STARTING SOON</Text> : null;

        return (
            <View>
                <TouchableHighlight style={styles.row} onPress={this.onDetailPress.bind(this)} underlayColor="#f0f0f0">
                    <View style={styles.container}>
                        <Text style={styles.title}>{event.get('name')}</Text>

                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={styles.shortDistance}>{roundedDistance} miles away</Text>
                            {isHappeningNow}
                            {isHappeningSoon}
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        height: 75,
        marginBottom: 2
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        padding: 10,
    },
    title: {
        flex: 1.5,
        fontSize: 22,
        marginLeft: 10,
        color:'#666666'
    },
    shortDistance: {
        flex: 1,
        fontWeight: '900',
        color: '#b4b4b4'
    },
    happeningNowText: {
        flex: 1,
        fontWeight: '800',
        fontSize: 11,
        color: '#FFC400'
    },
    startingSoonText: {
        flex: 1,
        fontWeight: '800',
        fontSize: 11,
        color: '#00C853'
    }
});

module.exports = NearbyListItem;
