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

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = { dataSource: ds.cloneWithRows(props.nearbyEvents), modalActive: false }
    }

    renderRow(data, index) {
        return <NearbyListItem key={index} title={data.title} extra={data.extra} region={data.region} type={data.type} navigator={this.props.navigator} />;
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={styles.nearbyHeader}>NEARBY EVENTS (1 mile)</Text>
                {this.props.nearbyEvents.map(this.renderRow.bind(this))}
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
