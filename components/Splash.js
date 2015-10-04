let React = require('react-native');
let Home = require('./Home');

let {
    View,
    Text
} = React;

class Splash extends React.Component {

    onStartPress() {
        this.props.navigator({
            component: Home
        });
    }

    render() {
        return (
            <View>
                <Text>Best used in entertainment districts on the weekend</Text>
                <TouchableHighlight onPress={this.onStartPress.bind(this)}>
                    <Text>Find Events Nearby</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
