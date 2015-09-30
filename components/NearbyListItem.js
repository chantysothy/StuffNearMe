let React = require('react-native');
let EventDetails = require('./EventDetails');
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
        console.log(Object.keys(this.props));

        this.props.navigator.push({
            component: EventDetails,
            title: 'Event Details',
            passProps: this.props
        });
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={this.onDetailPress.bind(this)}>
                    <View style={styles.container}>
                        <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
                        <Text style={styles.extra}>{this.props.extra}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        padding: 10,
    },
    title: {
        fontSize: 15,
        color:'#666666'
    },
    extra: {
        fontSize: 11,
        color: '#999999'
    }
});

module.exports = NearbyListItem;
