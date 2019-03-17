import  React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    StyleSheet,
    View
} from 'react-native';

export default class RestaurantRow extends Component {
    state = {
        showInfo: false
    };

    infoPressed = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    };

    render() {
        const {
            place,
            index
        } = this.props;

        return (
            <View key={place.name}
                  style={{backgroundColor: index % 2 === 0 ? 'white': '#F3F3F7'}}>
                <View style={styles.row}>
                    <View style={styles.edges}>
                        <Text>{index + 1}</Text>
                    </View>
                    <View style={styles.nameAddress}>
                        <Text>{place.name}</Text>
                        <Text style={styles.addressText}>{place.address}</Text>
                    </View>
                    <View style={styles.edges}>
                    <TouchableOpacity
                        onPress={this.infoPressed}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Info</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                {
                    this.state.showInfo &&
                    <View>
                        <Text>Restaurant Info</Text>
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    edges: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        minWidth: 50
    },
    nameAddress: {
        flexDirection:'column',
        flex: 8
    },
    addressText: {
        color: 'grey'
    },
    button: {
        borderWidth: 1,
        borderColor: '#0066CC',
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#FFF'
    },
    buttonText: {
        color: '#0066CC',
        fontSize: 12
    }
})