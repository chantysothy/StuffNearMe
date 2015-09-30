let React = require('react-native');
let {
    View,
    Text,
    StyleSheet,
    Modal,
    ScrollView,
    MapView
} = React;

class EventDetail extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.label}>Where:</Text>
                <MapView region={this.props.region} style={{ flex: 1 }} annotations={[this.props.region]} />

                <Text style={styles.label}>Pictures of the Place:</Text>
                <View style={{ flex:3 }}>
                    <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
                    <Text style={styles.extra}>{this.props.extra}</Text>
                </View>
            </ScrollView>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        padding: 20
    },
    extra: {
        padding: 30,
        fontSize: 11
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#69F0AE',
        padding: 15
    }
});

module.exports = EventDetail;
