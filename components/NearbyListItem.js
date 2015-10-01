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
                <TouchableHighlight onPress={this.onDetailPress.bind(this)} underlayColor="#f0f0f0">
                    <View style={styles.container}>
                        <Text style={styles.title}>{this.props.name}</Text>
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
