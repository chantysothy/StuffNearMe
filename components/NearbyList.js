let React = require('react-native');
let NearbyListItem = require('./NearbyListItem');
let moment = require('moment-timezone');

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

    renderRow(eventModel, index) {
        return (<NearbyListItem
            eventModel={eventModel}
            key={index}
            navigator={this.props.navigator} />);
    }

    render() {

        let nearbyTonight = [];
        let fartherTonight = [];
        let nearbyTomorrow = [];

        for(let eventModel of this.props.events) {
            let distance = eventModel.getDistanceInMiles(this.props.latitude, this.props.longitude);

            let end = eventModel.get('end');

            console.log(moment(end).tz('America/Denver').format('LLL'));

            eventModel.set('distance', distance);

            if(distance < 1 && eventModel.isToday()) {
                nearbyTonight.push(eventModel);
            }
            else if(distance > 1) {
                fartherTonight.push(eventModel);
            }
        }

        let fartherAwayTonight = !!fartherTonight.length ? <Text style={[styles.nearbyHeader, { marginBottom: 15 }]}>FARTHER AWAY - TONIGHT</Text> : null;

        return (
            <View heigh={{ flex: 1 }}>
                <Text style={styles.nearbyHeader}>NEARBY EVENTS - TONIGHT</Text>
                <TouchableHighlight style={styles.radiusSetting} underlayColor="#e5e5e5">
                    <Text>Radius: 0.5 miles</Text>
                </TouchableHighlight>
                {nearbyTonight.map(this.renderRow.bind(this))}

                {fartherAwayTonight}
                {fartherTonight.map(this.renderRow.bind(this))}

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
        paddingBottom: 20
    }
});

module.exports = NearbyList;
