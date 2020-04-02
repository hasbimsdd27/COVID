import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title,
} from 'native-base';

import {submitData} from '../_actions/submit';
import {resetAnswer} from '../_actions/answer';

class Finish extends Component {
    render() {
        const data = this.props.Answer;

        const handleSubmit = () => {
            this.props.submitData(data);
            this.props.resetAnswer();
            this.props.navigation.navigate('Home');
        };
        return (
            <Container>
                <View style={styles.container}>
                    <View style={styles.Button}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                handleSubmit();
                            }}>
                            <Text
                                style={{
                                    color: 'white',
                                    textAlign: 'center',
                                    fontSize: 25,
                                }}>
                                SELESAI
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#eeeeee',
    },
    Button: {
        marginTop: 20,
        backgroundColor: '#09B5A4',
        borderColor: '#09B5A4',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
    },
});

const mapStateToProps = state => {
    return {
        Answer: state.Answer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitData: data => dispatch(submitData(data)),
        resetAnswer: () => dispatch(resetAnswer()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Finish);
