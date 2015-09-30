let React = require('react-native');
let {
    View,
    Text,
    StyleSheet,
    Modal,
    ScrollView
} = React;

class EventDetail extends React.Component {

    constructor(props) {
        super(props);

        console.log(this.props.modalVisible);
    }

    render() {
        return (
            <Modal
                animated={false}
                transparent={false}
                visible={this.props.modalVisible}
                style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

                <ScrollView>
                    <View>
                        <Text>Test</Text>
                    </View>
                </ScrollView>
            </Modal>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        padding: 10,
    }
});

module.exports = EventDetail;
