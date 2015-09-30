let React = require('react-native');
let NearbyMap = require('./NearbyMap');
let NearbyList = require('./NearbyList');
let {
    View,
    Text,
    StyleSheet,
    ScrollView,
    MapView,
    Navigator
} = React;

class Home extends React.Component {

    constructor(props) {
        super(props);

        let mockRegion = { longitude: -82.2, latitude: 28.0, longitudeDelta: 0.01, latitudeDelta: 0.01 };

        this.state = {
            data: [
                { title: 'Get Rawked by Taunk', extra: 'Fresh music from Taunk the Rawk', type: 'performer', region: mockRegion },
                { title: 'The beef within', extra: 'If you can finish a 9 oz steak in 3 minutes we let 3 of your friends drink for free', type: 'promotion', region: mockRegion },
                { title: 'Orchard of Doom', extra: 'Sample Beers half price!', type: 'discount', region: mockRegion },
                { title: 'Paddy\'s Irish pub', extra: 'Drink here, be merry', type: 'ad', region: mockRegion },
            ]
        };
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} style={{ height: 6000, flex: 1 }}>
                <NearbyList nearbyEvents={this.state.data} navigator={this.props.navigator} />
                <NearbyMap annotations={this.state.data} />
            </ScrollView>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'column',
        height: 6000
    },
    map: {
        flex: 1
    },
    block: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    nearbyHeader: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 10,
        color:'#69F0AE'
    }
});

module.exports = Home;
