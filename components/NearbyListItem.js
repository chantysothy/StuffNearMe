let React = require('react-native');
let EventDetail = require('./EventDetail');
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
            passProps: this.props
        });
    }

    render() {
        return (
            <View>
                <TouchableHighlight style={styles.row} onPress={this.onDetailPress.bind(this)} underlayColor="#f0f0f0">
                    <View style={styles.container}>
                        <Text style={styles.title}>{this.props.name}</Text>
                        <Text style={styles.shortDistance}>3km away</Text>
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
        flex: 3,
        fontSize: 22,
        color:'#666666'
    },
    shortDistance: {
        flex: 1,
        fontWeight: '900',
        marginLeft: 20,
        color: '#b4b4b4'
    }
});

module.exports = NearbyListItem;
